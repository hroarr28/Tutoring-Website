import React from "react";
import "./Header.css";
import CustomButton from "../Common/CustomButton/CustomButton";
import "../../App.css";

const Header = () => {
  return (
    <nav className="navContainer">
      <div>
        <a>Logo</a>
      </div>
      <ul className="centerContainer">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <ul className="rightContainer">
        <li>
          <a>Login</a>
        </li>
        <li>
          <CustomButton title={"Sign Up"} accesibilityLabel={"Sign Up"} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
