import { FC } from "react";
import ExamNavbar from "../components/ExamNavbar";
import Footer from "../components/Footer";
import Instructor from "../components/Instructor";
import News from "../components/News";
import OneToOneDiscussion from "../components/OneToOneDiscussion";
import PopularCourses from "../components/PopularCourses";
import PremiumIntegrations from "../components/PremiumIntegrations.tsx";
import WatchButtonIcon from "../components/svgs/WatchButtonIcon";
import Testimonials from "../components/Testimonials";
import UpscCourse from "../components/UpscCourse";

const Exam: FC = () => {
  return (
    <div className="exam page">
      <div className="header f1-header">
        <ExamNavbar />
        <img
          className="f1-header-bg-image"
          src="/assets/exam-header.png"
          alt="header"
        />
      </div>
      <div className="header-text">
        Studying{" "}
        <span className="highlight">Online is now much easier with</span> Carrer
        Guru
      </div>
      <div className="text">
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
      <UpscCourse />
      <Instructor />
      <PopularCourses />
      <OneToOneDiscussion />
      <PremiumIntegrations />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
};

export default Exam;
