import React from "react";
import tutor from "../../Images/Tutor4.png";
import thumbsup from "../../Images/thumbsup.png";
import stars from "../../Images/stars.png";

import "./Body.css";
import CustomButton from "../Common/CustomButton/CustomButton";

const Body = () => {
  return (
    <div className="backgroundColorContainer">
      <div className="containerBody">
        <div className="containerLeftBody">
          <h1 className="bodyHeadline">
            Unlock Your Child's <span className="potential">Potential</span>{" "}
            with Our Cutting-Edge GCSE Revision Courses
          </h1>
          <p className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="thumbsUpContainer">
            <img className="thumbsUp" src={thumbsup} />
            <div className="happyCustomersContainer">
              <p className="individualTextBody">500+</p>
              <p className="individualTextBodySmaller">Happy Customers</p>
            </div>
            <div className="happyCustomersContainer">
              <p className="individualTextBody">5/5</p>
              <div className="starsContainer">
                <img className="stars" src={stars} />
                <p className="individualTextBodySmaller">Rating</p>
              </div>
            </div>
          </div>
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
