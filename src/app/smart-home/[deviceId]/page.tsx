/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import {} from "@react-three/drei";
import {
  CubeTextureLoader,
  MeshBasicMaterial,
  BoxGeometry,
  PointLightHelper,
} from "three";
import { Div, Text } from "@/components";
import RealtimeDashboard from "@/components/common/chart/RealtimeDashboard";
import { House } from "@/components/model/House";
import {
  SocketContext,
  createSocketConnection,
} from "@/hooks/socket/socketContext";
import { HubConnection } from "@microsoft/signalr";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/model/House2";
import { Button } from "@nextui-org/react";
interface ChartData {
  value: number;
  label: Date;
}
import nx from "../../../assets/env/nx.png";
import Badge from "@/components/common/ui/Badge";
import { DataService } from "@/services/data";
import Camera from "@/components/model/Camera";
import { getPeriodOfDay } from "@/libs/utils";
const intensityMap = {
  night: 0.5,
  afternoon: 2,
  morning: 3,
};
export default function Device({ params }: { params: { deviceId: string } }) {
  const [socket, setSocket] = useState<HubConnection>();
  const customCamera = useRef();

  // Access the three.js camera from the useThree hook
  // const { camera: defaultCamera } = useThree();

  const MAX_RANGE = 5;
  // REALTIME DATA
  const [tempuratureData, setTempuratureData] = useState<ChartData[]>([]);
  const [tempuratureUnit, setTempuratureUnit] = useState<string>("°C");
  const [humidityData, setHumidityData] = useState<ChartData[]>([]);
  const [humidityUnit, setHumidityUnit] = useState<string>("");
  const [doorStatus, setDoorStatus] = useState<"0" | "1">("0");
  const [canopyStatus, setCanopyStatus] = useState<"0" | "1">("0");
  const [objectDetectStatus, setObjectDetectStatus] = useState<"0" | "1">("0");
  const [lightStatus, setLightStatus] = useState<"0" | "1">("0");

  console.log({
    tempuratureData,
  });
  useEffect(() => {
    if (params.deviceId) {
      const newSocket = createSocketConnection(
        process.env.NEXT_WS_ENDPOINT,
        params.deviceId,
      );
      newSocket.start().then(() => {
        newSocket?.on("ReceiveDataReport", (rawdata) => {
          const dataObject = rawdata;
          handleDataReceive(dataObject);
        });
      });
      console.log({
        newSocket,
      });
      setSocket(newSocket);
      initData();
      return () => {
        socket?.stop();
      };
    }
  }, [params.deviceId]);

  const initData = async () => {
    const tempTask = DataService.getListKey("Tempurature")
      .then((d) => d?.data ?? [])
      .then((v) =>
        v?.slice(0, 5)?.map((v) => ({
          value: v?.dataValue,
          label: v?.createdDate,
        })),
      );
    const humidTask = DataService.getListKey("Humidity")
      .then((d) => d.data ?? [])
      .then((v) =>
        v?.slice(0, 5)?.map((v) => ({
          value: v?.dataValue,
          label: v?.createdDate,
        })),
      );
    const doorTask = DataService.getListKey("Door")
      .then((d) => d.data ?? [])
      .then((v) => v?.shift());
    const canopyTask = DataService.getListKey("Canopy")
      .then((d) => d.data ?? [])
      .then((v) => v?.shift());
    const atDoorTask = DataService.getListKey("At-door Objects")
      .then((d) => d.data ?? [])
      .then((v) => v?.shift());
    const lightTask = DataService.getListKey("Light")
      .then((d) => d.data ?? [])
      .then((v) => v?.shift());
    const [tempData, humidData, doorData, canopyData, atDoorData, lightData] =
      await Promise.all([
        tempTask,
        humidTask,
        doorTask,
        canopyTask,
        atDoorTask,
        lightTask,
      ]);
    // const a =  await Promise.all([tempTask,humidTask, doorTask, canopyTask, atDoorTask])
    // console.log({a});
    setTempuratureData(tempData);
    setHumidityData(humidData);
    setDoorStatus(doorData?.dataValue ?? "0");
    setCanopyStatus(canopyData?.dataValue ?? "0");
    setObjectDetectStatus(atDoorData?.dataValue ?? "0");
    setLightStatus(lightData?.dataValue ?? "0");
  };
  const handleDataReceive = useCallback(
    (data: any) => {
      console.log({
        data: data,
      });
      switch (data?.typeId) {
        case 1: {
          setTempuratureData((prev) => {
            if (prev.length >= MAX_RANGE) {
              console.log({ dataMax: data });
              const tmp = [
                {
                  label: data.createdDate,
                  value: data.dataValue,
                },
                ...prev.slice(0, MAX_RANGE - 1),
              ];
              console.log({ tmp });
              return tmp;
            } else {
              console.log({ dataLow: data });
              // Add the new data point
              return [
                ...prev,
                {
                  label: data.createdDate,
                  value: data.dataValue,
                },
              ];
            }
          });

          break;
        }
        case 2: {
          setHumidityData((prev) => {
            if (prev.length >= MAX_RANGE) {
              console.log({ dataMax: data });
              const tmp = [
                {
                  label: data.createdDate,
                  value: data.dataValue,
                },
                ...prev.slice(0, MAX_RANGE - 1),
              ];
              console.log({ tmp });
              return tmp;
            } else {
              console.log({ dataLow: data });
              // Add the new data point
              return [
                ...prev,
                {
                  label: data.createdDate,
                  value: data.dataValue,
                },
              ];
            }
          });

          break;
        }
        case 3: {
          console.log({
            data: data.dataValue,
          });

          setDoorStatus(() => data.dataValue);
          break;
        }
        case 4: {
          setCanopyStatus(() => data.dataValue);
          break;
        }
        case 5: {
          setObjectDetectStatus(() => data.dataValue);
          break;
        }
        case 6: {
          setLightStatus(() => data.dataValue);
          break;
        }
        default:
          return;
      }
    },
    [tempuratureData],
  );

  const [ambientIntensity, setAmbientIntensity] = useState(0);
  const [period, setPeriod] = useState<"night" | "morning" | "afternoon">(
    "morning",
  );
  // Calculate ambient light intensity based on current time
  useEffect(() => {
    const period = getPeriodOfDay();
    setPeriod(period);
    // Set the ambient intensity based on the mapped value
    setAmbientIntensity(intensityMap[period]);
  }, []);
  console.log(period);
  
  // Function to map a value from one range to another
  const mapRange = (value, start1, end1, start2, end2) => {
    return ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
  };
  return (
    <SocketContext.Provider value={socket ?? null}>
      <Div className="container mx-auto flex h-screen w-full flex-1 flex-col py-4">
        <Div className="flex h-full flex-col gap-8 overflow-x-scroll rounded-xl bg-white p-4">
          <Text className="text-center font-serif text-xl font-semibold">
            Dashboard {params.deviceId}
          </Text>
          <Div className="flex flex-1 flex-col gap-2">
            <RealtimeDashboard
              unit={tempuratureUnit}
              title="Tempurature 🌡️"
              charData={tempuratureData ?? []}
            />
            <RealtimeDashboard
              unit={humidityUnit}
              title="Humidity 💧"
              charData={humidityData ?? []}
            />
            <div className="flex w-full gap-2 ">
              <div className="col-span-full flex w-full flex-col rounded-sm border border-gray-200 bg-white shadow-lg sm:col-span-6 ">
                <header className="flex items-center justify-between border-b border-gray-100 px-5  py-4">
                  <h2 className="font-semibold text-gray-800">{"Door 🚪"}</h2>
                  {doorStatus === "1" ? (
                    <Badge variant="green">OPEN</Badge>
                  ) : (
                    <Badge variant="red">CLOSE</Badge>
                  )}
                </header>
              </div>
              <div className="col-span-full flex w-full flex-col rounded-sm border border-gray-200 bg-white shadow-lg sm:col-span-6 ">
                <header className="justify flex items-center justify-between border-b border-gray-100 px-5 py-4">
                  <h2 className="font-semibold text-gray-800">{"Canopy"}</h2>
                  {canopyStatus === "1" ? (
                    <Badge variant="green">OPEN</Badge>
                  ) : (
                    <Badge variant="red">CLOSE</Badge>
                  )}
                </header>
              </div>
            </div>
            <div className="flex w-full gap-2 ">
              <div className="col-span-full flex w-1/2 w-full basis-1/2 flex-col rounded-sm border border-gray-200 bg-white shadow-lg sm:col-span-6 ">
                <header className="flex items-center justify-between border-b border-gray-100 px-5  py-4">
                  <h2 className="font-semibold text-gray-800">{"Light 💡"}</h2>
                  {lightStatus === "1" ? (
                    <Badge variant="green">ON</Badge>
                  ) : (
                    <Badge variant="red">OFF</Badge>
                  )}
                </header>
              </div>
              {/* <div className="col-span-full flex w-full flex-col rounded-sm border border-gray-200 bg-white shadow-lg sm:col-span-6 ">
                <header className="justify flex items-center justify-between border-b border-gray-100 px-5 py-4">
                  <h2 className="font-semibold text-gray-800">{"Canopy"}</h2>
                  {canopyStatus === "1" ? (
                    <Badge variant="green">OPEN</Badge>
                  ) : (
                    <Badge variant="red">CLOSE</Badge>
                  )}
                </header>
              </div> */}
            </div>
            {objectDetectStatus === "1" && (
              <div className="flex w-full gap-2 py-3">
                <Badge variant="red">
                  <span className="text-2xl">
                    <strong>Warning: </strong> Detect something/someone is at
                    the door
                  </span>
                </Badge>
              </div>
            )}
            <div className="h-[700px] w-full">
              {/* <Button
                onClick={() => {
                  setDoorStatus((prev) => (prev === "1" ? "0" : "1"));
                }}
              >
                Door toggle
              </Button>
              <Button
                onClick={() => {
                  setCanopyStatus((prev) => (prev === "1" ? "0" : "1"));
                }}
              >
                Canopy toggle
              </Button> */}
              <Canvas camera={{ position: [0, 0, 7], fov: 75 }} dpr={[1, 2]}>
                <ambientLight intensity={ambientIntensity} />
                <OrbitControls />

                {/* <mesh>
                  <boxGeometry args={[1000, 1000, 1000]} />
                  <meshBasicMaterial  map={cubeTexture} side={2} />
                </mesh> */}
                {period === "night" ? (
                  <Environment
                    background={true}
                    files={[
                      "/npx.png",
                      "/nnx.png", // Positive and negative X
                      "/npy.png",
                      "/nny.png", // Positive and negative Y
                      "/npz.png",
                      "/nnz.png", // Positive and negative Z
                    ]}
                  />
                ) : (
                  <Environment
                    background={true}
                    files={[
                      "/px.png",
                      "/nx.png", // Positive and negative X
                      "/py.png",
                      "/ny.png", // Positive and negative Y
                      "/pz.png",
                      "/nz.png", // Positive and negative Z
                    ]}
                  />
                )}
                {/* <Environment /> */}
                {/* <Model position={[-1, -3 ,-3]} doorOpen={doorStatus === "1"} /> */}
                <House
                  doorDetect={objectDetectStatus === "1"}
                  position={[-1, -3, -3]}
                  doorOpen={doorStatus === "1"}
                  canopyOpen={canopyStatus === "1"}
                  lightStatus={lightStatus === "1"}
                />
              </Canvas>
            </div>
          </Div>
        </Div>
      </Div>
    </SocketContext.Provider>
  );
}
