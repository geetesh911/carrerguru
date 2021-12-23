import { FC } from "react";
import RightSidebarHeading from "./RightSidebarHeading";
import MicIcon from "./svgs/MicIcon";
import NotebookIcon from "./svgs/NotebookIcon";
import NotificationIcon from "./svgs/NotificationIcon";
import OutcomeIcon from "./svgs/OutcomeIcon";
import SettingsIcon from "./svgs/SettingsIcon";
import UpcomingNotification from "./UpcomingNotification";

const RightSidebar: FC = () => {
  const upcomingNotifications = [
    {
      message: "Meeting with Mr Lurah",
      time: "09:20AM",
      subMessage: "Due Soon",
    },
    {
      message: "Meeting with Tok Dalang",
      time: "7:00AM",
      subMessage: "Due Soon",
    },
  ];
  const recentActivity = [
    {
      message: "Submisson NLP Programming",
      time: "04 Jan, 09:20AM",
      subMessage: "",
      icon: <NotebookIcon />,
    },
    {
      message: "Outcome administration",
      time: "04 Jan, 10:20AM",
      subMessage: "",
      icon: <OutcomeIcon />,
    },
    {
      message: "Teacher Panel Discussion",
      time: "10 Jan, 11:00AM",
      subMessage: "",
      icon: <MicIcon />,
    },
    {
      message: "Submisson Data Structure",
      time: "04 Jan, 09.00AM",
      subMessage: "",
      icon: <NotebookIcon />,
    },
    {
      message: "Submisson HCI Module 5",
      time: "04 Jan, 13.00PM",
      subMessage: "",
      icon: <NotebookIcon />,
    },
  ];
  return (
    <div className="right-sidebar">
      <div className="options">
        <div className="item">
          <NotificationIcon />
        </div>
        <div className="item">
          <SettingsIcon />
        </div>
        <div className="item">
          <img className="avatar" src="./assets/avatar1.png" alt="" />
        </div>
      </div>
      <div className="upcoming">
        <RightSidebarHeading heading="upcoming" />
        <div className="notifications">
          {upcomingNotifications.map((notification) => (
            <UpcomingNotification {...notification} />
          ))}
        </div>
      </div>
      <div className="upcoming recent">
        <RightSidebarHeading heading="Recent Activity" />
        <div className="notifications">
          {recentActivity.map((notification) => (
            <UpcomingNotification {...notification} />
          ))}
        </div>
      </div>
      <div className="upcoming recent">
        <RightSidebarHeading heading="Latest Message" />
        <div className="notifications avatars">
          <div className="avatar">
            <img className="avatar" src="./assets/avatar2.png" alt="avatar" />
          </div>
          <div className="avatar">
            <img className="avatar" src="./assets/avatar2.png" alt="avatar" />
          </div>
          <div className="avatar">
            <img className="avatar" src="./assets/avatar2.png" alt="avatar" />
          </div>
          <div className="avatar">
            <img className="avatar" src="./assets/avatar2.png" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
