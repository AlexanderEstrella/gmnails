import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import DATA from "../assets/images";

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Home-control">
      <div className="Frontdetails">
        <h3 className="Welcome">Welcome to GM Nails</h3>

        <p className="BusinessOP">
          Hours Operation: Monday-Friday 10:00AM - 7:00 PM
        </p>
      </div>
      <br></br>
      <p className="BusinessAD">7335 W Sand Lake Rd, Orlando, FL 32819</p>
      <hr className="divider"></hr>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {DATA.map((img, index) => {
          return (
            <Carousel.Item key={DATA.id} onClick={() => window.open(img.img)}>
              <img className="d-block w-100" src={img.img} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Home;
