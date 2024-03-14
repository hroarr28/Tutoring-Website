import React from "react";
import "./CustomButton.css";

const CustomButton = ({ title, onPress, accesibilityLabel, cardButton }) => {
  return (
    <button
      className={cardButton ? "cardButton" : "button"}
      onPress={onPress}
      aria-label={accesibilityLabel}
    >
      {title}
    </button>
  );
};

export default CustomButton;
