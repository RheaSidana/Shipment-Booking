import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bar:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    margin: "100px 50px",
    height: "100px",
    borderRadius: "25px",
  },
  entry:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img:{
    marginTop: "23px",
    padding: "5px 5px 5px 5px",
  }
}));
