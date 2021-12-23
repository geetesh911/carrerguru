import { FC } from "react";
import UpscCourseCard from "./UpscCourseCard";

const UpscCourse: FC = () => {
  return (
    <div className="upsc">
      <div className="upsc-small-heading">Students Favorite</div>
      <div className="upsc-heading">UPSC/WBSSC Courses</div>
      <div className="upsc-card-row">
        <UpscCourseCard />
        <UpscCourseCard />
      </div>
      <div className="upsc-card-row">
        <UpscCourseCard />
        <UpscCourseCard />
      </div>
      <div className="upsc-view-all-button">View All</div>
    </div>
  );
};

export default UpscCourse;
