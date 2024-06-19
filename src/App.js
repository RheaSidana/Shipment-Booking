import styles from "./AppStyles";
import React from "react";
import SearchForm from "./components/Search Form/searchForm";

function App() {
  const classes = styles();
  return (
    <div className={classes.app}>
      <SearchForm />
    </div>
  );
}

export default App;
