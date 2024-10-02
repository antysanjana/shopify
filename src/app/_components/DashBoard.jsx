import React from "react";
import NavBar from "./_dashboard-components/NavBar";
import HeroSection from "./_dashboard-components/HeroSection";
import Carousel from "./_dashboard-components/Carousel";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Carousel />
    </div>
  );
}

export default Dashboard;
