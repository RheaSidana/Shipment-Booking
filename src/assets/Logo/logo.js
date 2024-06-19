import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./logoStyles";

const logo = () => {
  const classes = styles();
  return (
    <div className={classes.box}>
      <Typography variant="h5" className={`${classes.ship} ${classes.text}`}>
        Ship
      </Typography>
      <Typography variant="h5" className={`${classes.mate} ${classes.text}`}>
        mate.
      </Typography>
    </div>
  );
};

export default logo;
