import React from "react";
import NavBar from "../components/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-dvh grid grid-rows-[auto_1fr] items-center justify-items-center">
      <NavBar />
      <div className="z-0">
        {children}
      </div>
    </section>
  );
}
