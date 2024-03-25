"use client";
import { Surround, Text } from "@/components/common/ui";
import { MENU_HEADER } from "@/constants/menuHeader";
import { useAuthStore } from "@/store/authStore";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownIcon,
  LogoutIcon,
  SettingIcon,
} from "@/components/common/icons/curved";
import { Role } from "@/models/auth";
import { usePathname } from "next/navigation";
import { Base } from ".";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { fullName, role, logout } = useAuthStore();
  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
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
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 sm:flex" justify="center">
        {MENU_HEADER.map((item) => (
          <NavbarItem key={`${item.label}`} isActive={item.href === pathname}>
            <Link
              color="foreground"
              href={item.href}
              className="flex flex-row items-center justify-center gap-2"
            >
              <Text>{item.icon}</Text>
              <Text>{item.label}</Text>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Base>
          {fullName && role ? (
            <NavbarItem className="flex items-center gap-2">
              <Avatar name={fullName} size="md" />
              <Surround className="flex flex-col">
                <Text className="text-sm font-bold">{fullName}</Text>
                <Text className="text-xs">{role}</Text>
              </Surround>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly variant="light">
                    <ArrowDownIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    key="smart-home"
                    textValue="smart-home"
                    className={`${!(role === Role.Admin) ? "hidden" : ""}`}
                  >
                    {role === Role.Admin && (
                      <Link
                        color="foreground"
                        href="/smart-home"
                        className="flex items-center gap-2"
                      >
                        <SettingIcon />
                        <Text>Go to Smart Home</Text>
                      </Link>
                    )}
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    textValue="logout"
                    onClick={() => logout()}
                  >
                    <Surround className="flex items-center gap-2 text-danger-500">
                      <LogoutIcon />
                      <Text>Logout</Text>
                    </Surround>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <Button as={Link} color="primary" href="/login" variant="flat">
                Login
              </Button>
            </NavbarItem>
          )}
        </Base>
      </NavbarContent>
      <NavbarMenu>
        {MENU_HEADER.map((item) => (
          <NavbarMenuItem key={`${item.label}`}>
            <Button
              as={Link}
              href={item.href}
              variant="light"
              className="flex flex-row items-center justify-start gap-2"
            >
              <Text>{item.icon}</Text>
              <Text>{item.label}</Text>
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
