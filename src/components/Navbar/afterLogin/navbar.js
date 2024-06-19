import React from "react";
import Logo from "../../../assets/Logo/logo";
import TrackShipment from "../../../assets/TrackShipment/trackShipmentButton";
import Dollar from "../../../assets/Dollar/dollar";
import styles from "./navbarStyles";

const navbar = () => {
  const classes = styles();
  return (
    <div className={`${classes.bar} ${classes.flexing}`}>
      <Logo />
      <div className={`${classes.btns} ${classes.flexing}`}>
        <Dollar />
        <TrackShipment />
      </div>
    </div>
  );
};

export default navbar;
