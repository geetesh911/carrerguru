import { FC } from "react";

const WhatIsCarrerGuru: FC = () => {
  return (
    <div className="what-is-carrer-guru">
      <div className="what-is-carrer-guru-heading">
        What is <span>Carrer Guru?</span>
      </div>
      <div className="what-is-carrer-guru-content">
        Carrer Guru is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </div>

      <div className="what-is-carrer-guru-images">
        <div
          className="image"
          style={{ backgroundImage: "url(./assets/what-is-carrer-guru1.png)" }}
        >
          <div className="label">FOR INSTRUCTORS</div>
          <div className="button">Start a class today</div>
        </div>
        <div
          className="image"
          style={{ backgroundImage: "url(./assets/what-is-carrer-guru2.png)" }}
        >
          <div className="label">FOR STUDENTS</div>
          <div className="button">Enter access code</div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCarrerGuru;
