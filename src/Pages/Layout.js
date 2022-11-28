import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="Home-control">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
