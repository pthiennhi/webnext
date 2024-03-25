import { Base, Footer, Header, Surround } from "@/components/common";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Base>
      <Header />
      <Surround>{children}</Surround>
      <Footer />
    </Base>
  );
}
