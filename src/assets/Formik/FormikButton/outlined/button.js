import { Button } from "@material-ui/core";
import React from "react";
import styles from "./buttonStyles";

const button = ({text}) => {
  const classes = styles();
  return (
    <Button variant="outlined" className={classes.btn}>
      {text}
    </Button>
  );
};

export default button;
