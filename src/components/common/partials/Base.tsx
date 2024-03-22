"use client";
import { Role } from "@/models/auth";
import { useAuthStore } from "@/store/authStore";
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";

export const Base = ({ children }: { children: React.ReactNode }) => {
  const { setAuth, accessToken } = useAuthStore();
  useEffect(() => {
    if (!accessToken) {
      const accessToken = getCookie("accessToken");
      const fullName = getCookie("fullName");
      const role = getCookie("role");
      if (accessToken && fullName && role) {
        setAuth({
          accessToken,
          fullName,
          role: role as Role,
          isAuth: true,
        });
      }
    }
  }, [setAuth]);

  return <>{children}</>;
};
