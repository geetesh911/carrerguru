import { FC } from "react";
import CourseIcon from "./svgs/CourseIcon";
import RatingIcon from "./svgs/RatingIcon";
import StudentIcon from "./svgs/StudentIcon";

interface IInstructorCardProps {
  image: string;
  heading: string;
  subHeading: string;
  courses: number;
  students: number;
  rating: number;
}

const InstructorCard: FC<IInstructorCardProps> = ({
  image,
  heading,
  subHeading,
  courses,
  students,
  rating,
}) => {
  return (
    <div className="instructor-card">
      <div className="instructor-image">
        <img src={image} alt="instructor1" />
      </div>
      <div className="instructor-card-content">
        <div className="left">
          <div className="content-heading">{heading}</div>
          <div className="content-sub-heading">{subHeading}</div>
        </div>
        <div className="right">
          <div className="join-now-button">Join Now</div>
        </div>
      </div>
      <div className="instructor-footer">
        <div className="footer-item courses">
          <CourseIcon /> <span>{courses}</span>
        </div>
        <div className="footer-item students">
          <StudentIcon /> <span>{students}</span>
        </div>
        <div className="footer-item rating">
          <RatingIcon /> <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
