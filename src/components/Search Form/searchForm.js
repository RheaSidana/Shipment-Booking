import React from "react";
import Navbar from "../Navbar/afterLogin/navbar";
import Intro from "../Intro/introduction";
import SearchBar from "../SearchBar/searchBar";
// import styles from "./searchFormStyles";
import Wave from "../wave/wave";
// import { CardMedia } from "@mui/material";
// import { ReactComponent as ReactLogo } from "./../../images/svgviewer-output.svg";

const searchForm = () => {
  // const classes = styles();
  return (
    // <div className={classes.page}>
    <div>
      <Navbar />
      <Intro />
      <SearchBar />
      <Wave />
    </div>
  );
};

export default searchForm;
