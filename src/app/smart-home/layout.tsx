import { Base, ProtectedAdmin, Sidebar } from "@/components";
import React from "react";

export default function SmartHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Base>
      <ProtectedAdmin>
        <Sidebar />
        
        {children}</ProtectedAdmin>
    </Base>
  );
}
