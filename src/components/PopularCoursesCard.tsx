import { FC } from "react";
import BookIcon from "./svgs/BookIcon";
import ClockIcon from "./svgs/ClockIcon";
import LevelIcon from "./svgs/LevelIcon";
import RatingIcon from "./svgs/RatingIcon";
import StudentIcon from "./svgs/StudentIcon";

interface IPopularCoursesCardProps {
  image: string;
  heading: string;
  subHeading: string;
  students: number;
  rating: number;
  time: string;
  book: string;
  level: string;
}

const PopularCoursesCard: FC<IPopularCoursesCardProps> = ({
  image,
  heading,
  subHeading,
  students,
  rating,
  time,
  book,
  level,
}) => {
  return (
    <div className="popular-courses-card">
      <div className="popular-courses-image">
        <img src={image} alt="popular-courses-1" />
      </div>
      <div className="popular-courses-card-content">
        <div className="content-heading">
          Web Development from Beginning to Pro
        </div>
      </div>
      <div className="popular-courses-footer">
        <div className="footer-item students">
          <StudentIcon /> <span>{students}</span>
        </div>
        <div className="footer-item rating">
          <RatingIcon /> <span>{rating}</span>
        </div>
      </div>
      <div className="popular-courses-footer">
        <div className="footer-item students">
          <ClockIcon /> <span>{time}</span>
        </div>
        <div className="footer-item rating">
          <BookIcon /> <span>{book}</span>
        </div>
        <div className="footer-item rating">
          <LevelIcon /> <span>{level}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularCoursesCard;
