import React from "react";
import styles from "./introductionStyles";
import { Typography } from "@material-ui/core";

const intro = () => {
  const classes = styles();
  return (
    <>
      <Typography variant="h2" className={`${classes.flexing} ${classes.top}`}>
      Hassle-Free Shipping Solutions
      </Typography>
      <Typography variant="h4" className={classes.flexing}>
      Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.
      </Typography>
    </>
  );
};

export default intro;
