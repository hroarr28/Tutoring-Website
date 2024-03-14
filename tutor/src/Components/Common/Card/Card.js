import React from "react";
import "./Card.css";
import CustomButton from "../CustomButton/CustomButton";

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img className="cardImage" src={image} />
      <h2>{title}</h2>
      <p>Multiple Exam Boards Available</p>
      <CustomButton title="Find Out More" />
    </div>
  );
};

export default Card;
