import { FC } from "react";
import ThreeDots from "./svgs/ThreeDots";

interface IRightSidebarHeadingProps {
  heading: string;
}

const RightSidebarHeading: FC<IRightSidebarHeadingProps> = ({ heading }) => {
  return (
    <div className="right-sidebar-heading">
      <div className="item heading">{heading}</div>
      <div className="item icon">
        <ThreeDots />
      </div>
    </div>
  );
};

export default RightSidebarHeading;
