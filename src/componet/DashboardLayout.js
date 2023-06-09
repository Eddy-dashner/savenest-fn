import React from "react";
import Dashboardnav from "../pages/dashboard/dashboardnav";

function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Dashboardnav />
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
