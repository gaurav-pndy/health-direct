import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideNavbar from "../components/SideNavbar";
import Header from "../components/Header";
import "./AppLayout.css";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="layout-container">
      <Header />
      <SideNavbar />
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
