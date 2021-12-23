import { FC } from "react";
import InstructorCard from "./InstructorCard";

const Instructor: FC = () => {
  const instrucotorData = [
    {
      image: "./assets/instructor1.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      courses: 19,
      students: 259220,
      rating: 4.8,
    },
    {
      image: "./assets/instructor2.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      courses: 19,
      students: 259220,
      rating: 4.8,
    },
    {
      image: "./assets/instructor3.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      courses: 19,
      students: 259220,
      rating: 4.8,
    },
    {
      image: "./assets/instructor4.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      courses: 19,
      students: 259220,
      rating: 4.8,
    },
    {
      image: "./assets/instructor3.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      courses: 19,
      students: 259220,
      rating: 4.8,
    },
    {
      image: "./assets/instructor4.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      courses: 19,
      students: 259220,
      rating: 4.8,
    },
  ];
  return (
    <div className="instructor">
      <div className="instructor-heading">INSTRUCTOR</div>
      <div className="instructor-cards">
        {instrucotorData.map((instructor) => (
          <InstructorCard {...instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructor;
