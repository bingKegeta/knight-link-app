import React from "react";
import NavBar from "../../components/NavBar";
import Head from "next/head";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-dvh grid grid-rows-[auto_1fr] items-center justify-items-center">
      <NavBar />
      <div>
        {children}
      </div>
    </section>
  );
}
