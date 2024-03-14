import React from "react";
import "../../App.css";
import "./Achievements.css";

const Achievements = () => {
  return (
    <div className="achievementsContainer">
      <div>
        <h3 className="h3Text">OUR 10 YEARS OF</h3>
        <h2>Hardwork & Achievements</h2>
      </div>
      <div className="achievementsBoxesContainer">
        <div className="achievementsSquare">
          <div className="achievementsSquareContent">
            <div className="individualText">
              <p>2000+</p>
            </div>
            <p>Tests Complete</p>
          </div>
        </div>
        <div className="achievementsSquare">
          <div className="achievementsSquareContent">
            <div className="individualText">
              <p>98%</p>
            </div>
            <p> Of Parents Recommend Us</p>
          </div>
        </div>
        <div className="achievementsSquare">
          <div className="achievementsSquareContent">
            <div className="individualText">
              <p>20</p>
            </div>
            <p>Countries Worldwide</p>
          </div>
        </div>
        <div className="achievementsSquare">
          <div className="achievementsSquareContent">
            <div className="individualText">
              <p>89%</p>
            </div>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
