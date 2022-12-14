/**
 * This is the Navigation component. It is responsible for displaying the navigation bar.
 * Using Material UI to style the navigation bar.
 * And using the makeStyles hook to style the navigation bar.
 *
 */

import endpoints from "../utils/endpoints"; //Importing the endpoints from the utils folder.
import { makeStyles } from "@mui/styles";

export default function Navigation() {
  //This is the Navigation component.
  const classes = useStyles();
  return endpoints.map(
    (
      endpoint //This Maps through the endpoints and displays them.
    ) => <ul className={classes.navigation}>{endpoint.type}</ul>
  );
}

const useStyles = makeStyles({
  ToolBar: {
    display: "inline",
    height: "150px",
  },
  navigation: {
    display: "inline",
    alignItems: "center",
    position: "relative",
    fontSize: "20px",
    fontWeight: "inherit",
    color: "grey",
    "&:hover": {
      color: "white",
      transition: "all 0.5s ease",
      fontSize: "22px",
    },
  },
});
