import React from "react";
import Logo from "../../../assets/Logo/logo";
import Login from "../../../assets/Login/login";
import styles from "./navbarStyles";
import LearnMore from "../../../assets/LearnMore/dollar";

const navbar = () => {
  const classes = styles();
  return (
    <div className={`${classes.bar} ${classes.flexing}`}>
      <Logo />
      <div className={`${classes.btns} ${classes.flexing}`}>
        <Login />
        <LearnMore />
      </div>
    </div>
  );
};

export default navbar;
