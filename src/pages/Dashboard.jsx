import React from "react";

import DashboardHeader from "../components/DashboardComponents/DashboardHeader";
import ProfileCard from "../components/DashboardComponents/ProfileCard";
import PaymentsCard from "../components/DashboardComponents/PaymentsCard";
import DiscountCard from "../components/DashboardComponents/DiscountCard";
import AppointmentsCard from "../components/DashboardComponents/AppointmentsCard";
import ServicesCard from "../components/DashboardComponents/ServicesCard";
import "./Dashboard.css"; // Assuming you have a CSS file for styles

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      {/* <DashboardHeader /> */}

      <div className="dashboard-grid">
        {/* Left Column */}

        <div className="discount-card-mobile">
          <DiscountCard />
        </div>

        <ProfileCard />
        <PaymentsCard />

        <div className="discount-card-desktop">
          <DiscountCard />
        </div>

        <AppointmentsCard />

        {/* Middle Column */}
        <ServicesCard />

        {/* Right Column */}
      </div>
    </div>
  );
};

export default Dashboard;
