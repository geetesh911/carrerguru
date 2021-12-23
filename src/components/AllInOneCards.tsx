import { FC } from "react";
import CalendarIcon from "./svgs/CalendarIcon";
import FileIcon from "./svgs/FileIcon";
import PeopleIcon from "./svgs/PeopleIcon";

const AllInOneCards: FC = () => {
  return (
    <div className="all-in-one">
      <div className="heading">
        All-In-One <span>Cloud Software.</span>
      </div>
      <div className="text">
        Carrer Guru is one powerful online test suite that combines all the
        tools needed for a successful job interview.
      </div>
      <div className="cards">
        <div className="all-in-one-card">
          <div className="all-in-one-icon">
            <FileIcon />
          </div>
          <div className="all-in-one-heading">
            Online Test, MCQ, & Stuady Metirial
          </div>
          <div className="all-in-one-content">
            Simple and secure control of your organization’s financial and legal
            transactions. Send customized invoices and contracts
          </div>
        </div>
        <div className="all-in-one-card">
          <div className="all-in-one-icon">
            <CalendarIcon />
          </div>
          <div className="all-in-one-heading">
            Easy Scheduling & Attendance Tracking
          </div>
          <div className="all-in-one-content">
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance
          </div>
        </div>
        <div className="all-in-one-card">
          <div className="all-in-one-icon">
            <PeopleIcon />
          </div>
          <div className="all-in-one-heading">Student & Teacher Community</div>
          <div className="all-in-one-content">
            Automate and track emails to individuals or groups. Skilline’s
            built-in system helps organize your organization
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOneCards;
