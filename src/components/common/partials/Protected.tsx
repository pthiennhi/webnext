"use client";
import NoPermission from "@/components/auth/NoPermission";
import { Role } from "@/models/auth";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React from "react";

export const Protected = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuthStore();
  const router = useRouter();

  if (!isAuth) {
    router.push("/login");
    return null;
  }
  return <>{children}</>;
};

export const ProtectedAdmin = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, role } = useAuthStore();
  const router = useRouter();
  if (!isAuth) {
    router.push("/login");
    return null;
  }
  if (isAuth && role !== Role.Admin) {
    return <NoPermission />;
  }
  return <>{children}</>;
};
