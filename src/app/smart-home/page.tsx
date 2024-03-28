/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Div, Text } from "@/components";
import useDevices from "@/hooks/device/useDevices";
import { useAuthStore } from "@/store/authStore";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useId } from "react";

export default function SmartHome() {
  const {accountId} = useAuthStore()
  const {data} = useDevices({ownerId: accountId??1});
  return (
    <Div className="container mx-auto flex h-screen w-full flex-1 flex-col py-4">
      <Div className="flex h-full flex-col gap-8 overflow-x-scroll rounded-xl bg-white p-4">
        <Text className="text-center font-serif text-xl font-semibold">
          Smart Home Devices
        </Text>
        <Div className="flex-1">
          <Div className="flex flex-wrap justify-center gap-8">
            {/* {Array.from({ length: 10 }).map((_, i) => (
              <Card
                className="py-4"
                key={useId()}
                as={Link}
                href={`/smart-home/${i+1}`}
              >
                <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                  <Text className="text-tiny font-bold uppercase">
                    Daily Mix
                  </Text>
                  <Text className="text-default-500">12 Tracks</Text>
                  <Text className="text-large font-bold">Frontend Radio</Text>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="rounded-xl object-cover"
                    src="/images/feature.svg"
                    width={270}
                    height={200}
                  />
                </CardBody>
              </Card>
            ))} */}
            {data?.map((d, i) => (
              <Card
                className="py-4 shadow-lg rounded-md"
                key={d.serialId}
                as={Link}
                href={`/smart-home/${d.serialId}`}
              >
                <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                  <Text className="text-large font-bold">{d.deviceName}</Text>
                  <Text className="text-medium font-bold text-default-600 m-0">
                    {d?.deviceType?.typeName}
                  </Text>
                  <Text className="text-default-500 text-tiny py-1">Serial: {d.serialId}</Text>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="rounded-xl object-cover"
                    src="/Microbit.png"
                    width={270}
                    height={200}
                  />
                </CardBody>
              </Card>
            ))}
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
