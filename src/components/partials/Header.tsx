"use client";
import {
  Avatar,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownIcon,
  HomeIcon,
  InfoSquareIcon,
  SendIcon,
} from "@/components/icons/curved";
import { Text, Surround } from "@/components/ui";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      label: "About",
      href: "/about",
      icon: <InfoSquareIcon />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <SendIcon />,
    },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/next.svg"
            alt="Logo"
            width={64}
            height={64}
            unoptimized
            priority
            quality={100}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-12 sm:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={`${item.label}`}>
            <Link
              className="flex flex-row items-center justify-center gap-2"
              href={item.href}
            >
              <Text>{item.icon}</Text>
              <Text>{item.label}</Text>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
        {/* {fullName && role ? (
          <NavbarItem className="flex items-center gap-2">
            <Avatar name={fullName} size="md" />
            <Surround className="flex flex-col">
              <Text className="text-sm font-bold">{fullName}</Text>
              <Text className="text-xs">{role}</Text>
            </Surround>
            <Dropdown>
              <DropdownTrigger>
                <ArrowDownIcon />
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="manage">
                  {role === Role.Admin && (
                    <Link href="/management/user">Manage account</Link>
                  )}
                  {role === Role.Staff && (
                    <Link href="/management/blog">Manage blog</Link>
                  )}
                </DropdownItem>
                <DropdownItem key="logout">
                  <Button
                    variant="flat"
                    color="danger"
                    onClick={() => useAuthStore.getState().logout()}
                  >
                    Logout
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={Link} color="primary" href="/auth/login" variant="flat">
              Login
            </Button>
          </NavbarItem>
        )} */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.label}`}>
            <Link
              className="flex flex-row items-center justify-center gap-2"
              href={item.href}
            >
              <Text>{item.icon}</Text>
              <Text>{item.label}</Text>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
