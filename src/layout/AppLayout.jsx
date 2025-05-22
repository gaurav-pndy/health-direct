import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideNavbar from "../components/SideNavbar";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SideNavbar />
      <main className=" xl:ml-80 mt-20 xl:mt-0 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
