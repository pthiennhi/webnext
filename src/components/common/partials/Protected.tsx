"use client";
import NoPermission from "@/components/auth/NoPermission";
import { Role } from "@/models/auth";
import { useAuthStore } from "@/store/authStore";
import React from "react";

export const Protected = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuthStore();

  if (!isAuth) {
    return <NoPermission />;
  }
  return <>{children}</>;
};

export const ProtectedAdmin = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, role } = useAuthStore();
  if (!isAuth || role !== Role.Admin) {
    return <NoPermission />;
  }
  return <>{children}</>;
};
