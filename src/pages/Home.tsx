import { FC } from "react";
import CompanyLogos from "../components/svgs/CompanyLogos";
import HomeNavbar from "../components/HomeNavbar";
import WatchButtonIcon from "../components/svgs/WatchButtonIcon";
import AllInOneCards from "../components/AllInOneCards";
import WhatIsCarrerGuru from "../components/WhatIsCarrerGuru";
import PhysicalClassroom from "../components/PhysicalClassroom";
import OurFeatures from "../components/OurFeatures";
import PremiumIntegrations from "../components/PremiumIntegrations.tsx";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import News from "../components/News";

const Home: FC = () => {
  return (
    <div className="home page">
      <div className="header f1-header">
        <HomeNavbar />
        <img
          className="f1-header-bg-image"
          src="/assets/header-with-girl.png"
          alt="header"
        />
      </div>
      <div className="header-text">
        Studying{" "}
        <span className="highlight">Online is now much easier with</span> Carrer
        Guru
      </div>
      <div className="sub-text">
        Carrer Guru is an interesting platform that will teach you in more an
        interactive way
      </div>
      <div className="join-button">
        <button className="">Join for free</button>
      </div>
      <div className="watch-how">
        <WatchButtonIcon />
        Watch How it Works
      </div>
      <div className="download-buttons">
        <img src="./assets/download-buttons.png" alt="download-buttons" />
      </div>

      <div className="company-logos">
        <CompanyLogos />
      </div>
      <AllInOneCards />
      <WhatIsCarrerGuru />
      <PhysicalClassroom />
      <OurFeatures />
      <PremiumIntegrations />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
