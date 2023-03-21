import Header from "@/components/header";
import Navigation from "@/navigation-footer/navigation";
import React from "react";
import Heros from "./components/heros";

export default function Homepage() {
  return (
    <>
      <Header title="Azra.com" />

      <main>
        <Navigation />
        <Heros/>
      </main>
    </>
  );
}
