"use client";
import {
  DeviceIcon,
  HomeIcon,
  LogoutIcon,
} from "@/components/common/icons/curved";
import { Div, Logo, Text } from "@/components/common/ui";
import useDevices from "@/hooks/device/useDevices";
import { useAuthStore } from "@/store/authStore";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const { fullName, logout, accountId } = useAuthStore();
  const pathName = usePathname();
  const { data } = useDevices({ ownerId: accountId ?? 1 });

  return (
    <Div className="h-screen w-80 p-4">
      <Div className="flex h-full flex-col rounded-xl bg-white p-4 shadow-sm">
        <Div className="h-5/6 overflow-y-scroll">
          <Logo/>
          <Divider />
          <Div className="flex flex-col">
            <Accordion>
              <AccordionItem
                textValue={""}
                title={
                  <Link
                    href={"/smart-home"}
                    color="foreground"
                    className="flex flex-row items-center justify-start gap-2"
                  >
                    <Text>
                      <DeviceIcon />
                    </Text>
                    <Text>All devices</Text>
                  </Link>
                }
              >
                <Div>
                  {data?.map((d) => (
                    <Button
                      as={Link}
                      key={d.serialId}
                      href={"/smart-home/" + d.serialId}
                      variant={pathName === d.serialId ? "solid" : "light"}
                      className="mb-2.5 ms-2 flex flex-row items-center justify-start gap-2"
                    >
                      <Text>
                        <HomeIcon />
                      </Text>
                      <Text>{d?.deviceName}</Text>
                    </Button>
                  ))}
                </Div>
              </AccordionItem>
            </Accordion>
          </Div>
        </Div>

        {fullName && (
          <Div className="flex h-1/6 w-full items-end">
            <Div className="flex w-full rounded-2xl bg-default/5 p-2 shadow-md">
              <Div className="flex flex-1 items-center gap-4">
                <Avatar name={fullName} size="sm" />
                <Text className="text-sm font-bold">{fullName}</Text>
              </Div>
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onClick={() => logout()}
              >
                <LogoutIcon />
              </Button>
            </Div>
          </Div>
        )}
      </Div>
    </Div>
  );
};
