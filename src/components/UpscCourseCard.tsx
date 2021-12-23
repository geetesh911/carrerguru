import { FC } from "react";
import UpscCardBottom from "./svgs/UpscCardBottom";

const UpscCourseCard: FC = () => {
  return (
    <div className="upsc-card-container">
      <div
        className="upsc-card"
        style={{ backgroundImage: "url(./assets/upsc-card.png)" }}
      >
        <div className="upsc-start-now-button">Start Now</div>
        <div className="upsc-add-to-list-button">Add to List</div>
      </div>
      <div className="upsc-card-bottom">
        <UpscCardBottom />
      </div>
    </div>
  );
};

export default UpscCourseCard;
