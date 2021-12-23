import { FC } from "react";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";

const Dashboard: FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="small-heading">Hello Santanu, Welcome back 👋🏻</div>
        <div className="heading">Your Dashboard today</div>
        <div className="creative-box">
          <div className="left">
            <div className="heading">Creative outdoor ads</div>
            <div className="sub-heading">
              Every large design company whether it’s a multi-national branding
              corporation or a regular down at heel tatty magazine publisher
              needs to fill holes in the workforce.
            </div>
          </div>
          <div className="right">
            <div className="button">Get started</div>
          </div>
        </div>
        <div className="charts">
          <div className="chart">
            <img src="./assets/chart1.png" alt="chart1" />
          </div>
          <div className="chart">
            <img src="./assets/chart2.png" alt="chart2" />
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
