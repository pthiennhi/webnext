"use client";
import { LogoutIcon, SettingIcon } from "@/components/common/icons/curved";
import { Div, Text } from "@/components/common/ui";
import { useAuthStore } from "@/store/authStore";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const { fullName, logout } = useAuthStore();
  const pathName = usePathname();
  const MENU_SIDEBAR = [
    {
      label: "All devices",
      href: "/smart-home",
      icon: <SettingIcon />,
      subMenu: [
        {
          label: "Devices 1",
          href: "/smart-home/device/1",
          icon: <SettingIcon />,
        },
        {
          label: "Device 2",
          href: "/smart-home/device/2",
          icon: <SettingIcon />,
        },
        {
          label: "Device 3",
          href: "/smart-home/device/3",
          icon: <SettingIcon />,
        },
        {
          label: "Device 4",
          href: "/smart-home/device/4",
          icon: <SettingIcon />,
        },
        {
          label: "Device 5",
          href: "/smart-home/device/5",
          icon: <SettingIcon />,
        },
        {
          label: "Device 6",
          href: "/smart-home/device/6",
          icon: <SettingIcon />,
        },
        {
          label: "Device 7",
          href: "/smart-home/device/7",
          icon: <SettingIcon />,
        },
        {
          label: "Device 8",
          href: "/smart-home/device/8",
          icon: <SettingIcon />,
        },
        {
          label: "Device 9",
          href: "/smart-home/device/9",
          icon: <SettingIcon />,
        },
        {
          label: "Device 10",
          href: "/smart-home/device/10",
          icon: <SettingIcon />,
        }
      ],
    },
  ];
  return (
    <Div className="h-screen w-80 p-4">
      <Div className="flex h-full flex-col rounded-xl bg-white p-4 shadow-sm">
        <Div className="h-full flex-1">
          <Link
            href="/"
            color="foreground"
            className="mb-4 flex justify-center"
          >
            <Image
              src="/next.svg"
              alt="Logo"
              width={64}
              height={64}
              quality={100}
            />
          </Link>
          <Divider />
          <Div className="flex flex-col gap-4">
            {MENU_SIDEBAR.map((item) => (
              <Accordion key={item.href}>
                <AccordionItem
                  textValue={item.label}
                  childItems={item.subMenu}
                  title={
                    <Link
                      href={item.href}
                      color="foreground"
                      className="flex flex-row items-center justify-start gap-2"
                    >
                      <Text>{item.icon}</Text>
                      <Text>{item.label}</Text>
                    </Link>
                  }
                >
                  {item.subMenu?.map((subItem) => (
                    <Button
                      as={Link}
                      key={subItem.href}
                      href={subItem.href}
                      variant={pathName === subItem.href ? "solid" : "light"}
                      className="mb-2.5 ms-2 flex flex-row items-center justify-start gap-2"
                    >
                      <Text>{subItem.icon}</Text>
                      <Text>{subItem.label}</Text>
                    </Button>
                  ))}
                </AccordionItem>
              </Accordion>
            ))}
          </Div>
        </Div>

        {fullName && (
          <Div className="flex w-full items-center rounded-2xl bg-default/5 p-2 shadow-md">
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
        )}
      </Div>
    </Div>
  );
};
