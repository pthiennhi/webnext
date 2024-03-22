import { Base, ProtectedAdmin } from "@/components";
import React from "react";

export default function SmartHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Base>
      <ProtectedAdmin>{children}</ProtectedAdmin>
    </Base>
  );
}
