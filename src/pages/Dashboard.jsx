import React from "react";

import DashboardHeader from "../components/DashboardComponents/DashboardHeader";
import ProfileCard from "../components/DashboardComponents/ProfileCard";
import PaymentsCard from "../components/DashboardComponents/PaymentsCard";
import DiscountCard from "../components/DashboardComponents/DiscountCard";
import AppointmentsCard from "../components/DashboardComponents/AppointmentsCard";
import ServicesCard from "../components/DashboardComponents/ServicesCard";

const Dashboard = () => {
  return (
    <div className=" p-4  md:p-6 bg-gray-50 ">
      <DashboardHeader />

      <div className="md:grid space-y-6 md:grid-cols-2 lg:grid-cols-7  gap-6">
        {/* Left Column */}

        <ProfileCard />
        <PaymentsCard />
        <DiscountCard />
        <AppointmentsCard />

        {/* Middle Column */}

        <ServicesCard />

        {/* Right Column */}
      </div>
    </div>
  );
};

export default Dashboard;
