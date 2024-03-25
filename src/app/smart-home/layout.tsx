import { Base, ProtectedAdmin, Sidebar, Surround } from "@/components";
import React from "react";

export default function SmartHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Base>
      <ProtectedAdmin>
        <Surround className="w-screen flex flex-row bg-default/10">
          <Sidebar />
          {children}
        </Surround>
      </ProtectedAdmin>
    </Base>
  );
}
