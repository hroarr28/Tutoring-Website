import React from "react";
import "./CustomButton.css";

const CustomButton = ({ title, onPress, accesibilityLabel }) => {
  return (
    <button className="button" onPress={onPress} aria-label={accesibilityLabel}>
      {title}
    </button>
  );
};

export default CustomButton;
