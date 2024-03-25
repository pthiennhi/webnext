import { Base, Footer, Header, Div } from "@/components/common";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Div>{children}</Div>
      <Footer />
    </>
  );
}
