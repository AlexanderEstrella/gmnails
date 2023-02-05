import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../navbar";
import Footer from "../Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="Home-control">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
