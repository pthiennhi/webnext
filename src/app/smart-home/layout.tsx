import { Base, ProtectedAdmin, Sidebar, Div } from "@/components";
import React from "react";

export default function SmartHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Base>
      <ProtectedAdmin>
        <Div className="w-screen flex flex-row bg-default/10">
          <Sidebar />
          {children}
        </Div>
      </ProtectedAdmin>
    </Base>
  );
}
