import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./navbar";
import ControlledCarousel from "./Carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <ControlledCarousel />
  </React.StrictMode>
);
