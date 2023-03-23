import Header from "@/lib/header";
import Footer from "@/navigation-footer/footer";
import Navigation from "@/navigation-footer/navigation";
import React from "react";
import AboutUs from "./components/aboutUs";
import Benefit from "./components/benefit";
import Heros from "./components/heros";
import SempleProduct from "./components/sempleProduct";
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
        <SempleProduct />
        <WorkingProcess />
        <AboutUs />
        <Benefit />

        <Footer />
      </main>
    </>
  );
}
