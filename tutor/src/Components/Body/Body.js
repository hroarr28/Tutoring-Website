import React from "react";
import tutor from "../../Images/Tutor4.png";
import "./Body.css";
import CustomButton from "../Common/CustomButton/CustomButton";

const Body = () => {
  return (
    <div className="backgroundColorContainer">
      <div className="containerBody">
        <div className="containerLeftBody">
          <h1 className="bodyHeadline">
            Unlock Your Child's Potential with Our Cutting-Edge GCSE Revision
            Courses
          </h1>
          <p className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="containerRightBody">
          <img className="tutorImage" src={tutor} alt="tutor" />
          <div className="customButtonWrapper">
            <CustomButton
              title="Book Course Now"
              aria-label="Book Course Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
