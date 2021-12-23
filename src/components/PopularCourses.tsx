import { FC } from "react";
import PopularCoursesCard from "./PopularCoursesCard";

const PopularCourses: FC = () => {
  const popularCoursesData = [
    {
      image: "./assets/popular-course1.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      students: 259220,
      rating: 4.8,
      time: "12 hrs",
      book: "Lectures",
      level: "Medium",
    },
    {
      image: "./assets/popular-course2.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      students: 259220,
      rating: 4.8,
      time: "12 hrs",
      book: "Lectures",
      level: "Medium",
    },
    {
      image: "./assets/popular-course3.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      students: 259220,
      rating: 4.8,
      time: "12 hrs",
      book: "Lectures",
      level: "Medium",
    },
    {
      image: "./assets/popular-course4.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      students: 259220,
      rating: 4.8,
      time: "12 hrs",
      book: "Lectures",
      level: "Medium",
    },
    {
      image: "./assets/popular-course1.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      students: 259220,
      rating: 4.8,
      time: "12 hrs",
      book: "Lectures",
      level: "Medium",
    },
    {
      image: "./assets/popular-course2.png",
      heading: "Zain Khan",
      subHeading: "UI/UX Designer",
      students: 259220,
      rating: 4.8,
      time: "12 hrs",
      book: "Lectures",
      level: "Medium",
    },
  ];
  return (
    <div className="popular-courses">
      <div className="popular-courses-heading">POPULAR COURSES</div>
      <div className="popular-courses-cards">
        {popularCoursesData.map((popularCourse) => (
          <PopularCoursesCard {...popularCourse} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
