import { FC } from "react";
import BellIcon from "./svgs/BellIcon";

interface IUpcomingNotificationProps {
  icon?: JSX.Element;
  message: string;
  time?: string;
  subMessage?: string;
}

const UpcomingNotification: FC<IUpcomingNotificationProps> = ({
  icon,
  message,
  subMessage,
  time,
}) => {
  return (
    <div className="upcoming-notification">
      <div className="icon">{icon || <BellIcon />}</div>
      <div className="message">
        <div className="heading">{message}</div>
        <div className="bottom">
          <div className="time">{time}</div>
          <div className="sub-message">{subMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingNotification;
