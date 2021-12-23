import { FC } from "react";
import OneToOneDiscussion from "./OneToOneDiscussion";

const OurFeatures: FC = () => {
  return (
    <div className="our-features">
      <div className="our-features-heading">
        Our <span>Features</span>
      </div>
      <div className="our-features-sub-heading">
        This very extraordinary feature, can make learning activities more
        efficient
      </div>

      <div className="section1">
        <img src="./assets/features1.png" alt="features1" />
      </div>
      <div className="section2">
        <div className="content">
          <div className="content-heading">
            <span>Tools</span> For Teachers And Learners
          </div>
          <div className="content-sub-heading">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </div>
        </div>
        <img src="./assets/features2.png" alt="features2" />
      </div>
      <div className="section2 section3">
        <div className="image">
          <img src="./assets/features3.png" alt="features3" />
        </div>
        <div className="content">
          <div className="content-heading">
            Assessments, <span>Quizzes</span> , Tests
          </div>
          <div className="content-sub-heading">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </div>
        </div>
      </div>
      <div className="section2 section4">
        <div className="content">
          <div className="content-heading">
            <span>Class Management</span> Tools for Educators
          </div>
          <div className="content-sub-heading">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </div>
        </div>
        <img src="./assets/features4.png" alt="features2" />
      </div>
      <OneToOneDiscussion />
      <div className="button-containter">
        <div className="border-button">See more features</div>
      </div>
    </div>
  );
};

export default OurFeatures;
