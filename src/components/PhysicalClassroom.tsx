import { FC } from "react";

const PhysicalClassroom: FC = () => {
  return (
    <div
      className="physical-classroom"
      style={{ backgroundImage: "url(./assets/physical-classroom.png)" }}
    >
      {/* <img src="./assets/physical-classroom.png" alt="physical classroom" /> */}
      <div className="physical-classroom-heading">
        Everything you can do in a physical classroom, you can do with Carrer
        Guru
      </div>
      <div className="physical-classroom-content">
        Skilline’s school management software helps traditional and online
        schools manage scheduling, attendance, payments and virtual classrooms
        all in one secure cloud-based system.
      </div>
      <div className="physical-classroom-learn-more">Learn More</div>
    </div>
  );
};

export default PhysicalClassroom;
