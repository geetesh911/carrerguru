import { FC } from "react";
import Option1 from "./svgs/Option1";
import Option2 from "./svgs/Option2";
import Option3 from "./svgs/Option3";
import Option4 from "./svgs/Option4";
import Option5 from "./svgs/Option5";
import Option6 from "./svgs/Option6";

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <div className="options">
        <div className="option active">
          <Option1 />
        </div>
        <div className="option">
          <Option2 />
        </div>
        <div className="option">
          <Option3 />
        </div>
        <div className="option">
          <Option4 />
        </div>
        <div className="option">
          <Option5 />
        </div>
        <div className="option">
          <Option6 />
        </div>
        <div className="teams">
          <img src="./assets/teams.png" alt="teams" />
        </div>
      </div>
      <img
        className="upgrade-to-pro"
        src="./assets/upgrade-to-pro.png"
        alt="upgrade-to-pro"
      />
    </div>
  );
};

export default Sidebar;
