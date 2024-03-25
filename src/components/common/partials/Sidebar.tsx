"use client";
import { LogoutIcon, SettingIcon } from "@/components/common/icons/curved";
import { Surround, Text } from "@/components/common/ui";
import { useAuthStore } from "@/store/authStore";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Divider,
  Link
} from "@nextui-org/react";
import Image from "next/image";

export const Sidebar = () => {
  const { fullName, logout } = useAuthStore();
  const MENU_SIDEBAR = [
    {
      label: "All devices",
      href: "#1",
      icon: <SettingIcon />,
      subMenu: [
        {
          label: "Devices A",
          href: "#2",
          icon: <SettingIcon />,
        },
        {
          label: "Device B",
          href: "#3",
          icon: <SettingIcon />,
        },
      ],
    },
  ];
  return (
    <Surround className="h-screen w-80 p-4">
      <Surround className="flex h-full flex-col rounded-xl bg-white p-4 shadow-sm">
        <Surround className="h-full flex-1">
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
              unoptimized
              priority
              quality={100}
            />
          </Link>
          <Divider />
          <Surround className="flex flex-col gap-4">
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
                      variant="light"
                      className="mb-2.5 ms-2 flex flex-row items-center justify-start gap-2"
                    >
                      <Text>{subItem.icon}</Text>
                      <Text>{subItem.label}</Text>
                    </Button>
                  ))}
                </AccordionItem>
              </Accordion>
            ))}
          </Surround>
        </Surround>

        {fullName && (
          <Surround className="flex w-full items-center rounded-2xl bg-secondary/5 p-2 shadow-md">
            <Surround className="flex flex-1 items-center gap-4">
              <Avatar name={fullName} size="sm" />
              <Text className="text-sm font-bold">{fullName}</Text>
            </Surround>
            <Button
              variant="light"
              size="sm"
              isIconOnly
              onClick={() => logout()}
            >
              <LogoutIcon />
            </Button>
          </Surround>
        )}
      </Surround>
    </Surround>
  );
};
