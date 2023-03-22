import Header from "@/lib/header";
import Footer from "@/navigation-footer/footer";
import Navigation from "@/navigation-footer/navigation";
import React from "react";
import Heros from "./components/heros";
import Services from "./components/services";
import WorkingProcess from "./components/workingProcess";

export default function Homepage() {
  return (
    <>
      <Header title="Azra.com" />

      <main>
        <Navigation />
        <Heros/>
        <Services />
        <WorkingProcess />

        <Footer />
      </main>
    </>
  );
}
