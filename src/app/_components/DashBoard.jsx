import React from "react";
import NavBar from "./_dashboard-components/NavBar";
import HeroSection from "./_dashboard-components/HeroSection";
import Carousel from "./_dashboard-components/Carousel";
import Wave from "./_dashboard-components/Wave";
import AboutUsSection from "./_dashboard-components/AboutUsSection";
import VideoSection from "./_dashboard-components/VideoSection";
import ReviewsSection from "./_dashboard-components/ReviewsSection";
import SvgWave from "./_dashboard-components/SvgWave";
import HowToStart from "./_dashboard-components/HowToStart";
import WebProjectServices from "./_dashboard-components/WebProjectServices";
import TaskRequestComponent from "./_dashboard-components/TaskRequest";
import FooterSVG from "./_dashboard-components/FooterSVG";
import FooterSection from "./_dashboard-components/FooterSection";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Carousel />
      <Wave />
      <AboutUsSection />
      <VideoSection />
      <ReviewsSection />
      <SvgWave />
      <HowToStart />
      <WebProjectServices />
      <TaskRequestComponent />
      <FooterSVG />
      <FooterSection />
    </div>
  );
}

export default Dashboard;
