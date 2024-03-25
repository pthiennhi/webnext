"use client";
import { Role } from "@/models/auth";
import { useAuthStore } from "@/store/authStore";
import { Spinner } from "@nextui-org/react";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { Surround } from "@/components/common/ui";

export const Base = ({ children }: { children: React.ReactNode }) => {
  const { setAuth, accessToken } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!accessToken) {
      const accessToken = getCookie("accessToken");
      const cookieProfile = getCookie("profile");
      if (cookieProfile) {
        const profile = JSON.parse(
          Buffer.from(cookieProfile || "", "base64").toString("utf-8") ?? "{}",
        );

        if (accessToken && profile) {
          const { fullName, role } = profile;
          setAuth({
            accessToken,
            fullName,
            role: role as Role,
            isAuth: true,
          });
        }
      }
    }
    setIsLoading(false);
  }, [setAuth]);

  if (isLoading) {
    return (
      <Surround className="flex h-screen items-center justify-center">
        <Spinner size="md" />
      </Surround>
    );
  }
  return <>{children}</>;
};
