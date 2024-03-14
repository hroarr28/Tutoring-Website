import React from "react";
import Card from "../Common/Card/Card";
import Maths from "../../Images/maths.png";
import English from "../../Images/english.png";
import Science from "../../Images/science.png";
import "./RevisionPackages.css";

const RevisionPackages = () => {
  return (
    <div className="backgroundColorRevisionContainer">
      <div className="revisionContainer">
        <div>
          <h3>WHAT WE DO</h3>
          <h2> Revision Packages For Maths, English and Science</h2>
          <p className="paragraphContainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="cardContainer">
          <Card title="Maths" image={Maths} />
          <Card title="English" image={English} />
          <Card title="Science" image={Science} />
        </div>
      </div>
    </div>
  );
};

export default RevisionPackages;
