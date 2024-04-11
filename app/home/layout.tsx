import React from "react";
import NavBar from "../components/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />
      <div className="w-[100svh] h-[100svh] flex items-center justify-center m-auto">
        {children}
      </div>
    </section>
  );
}
