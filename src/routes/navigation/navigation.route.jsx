import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../../components/nav-bar/nav-bar.component";

const Navigation = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Navigation;
