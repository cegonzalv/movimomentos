// ##############################
// // // RegularCard styles
// #############################

import {
  card,
  cardHeader,
  defaultFont,
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader
} from "assets/jss/material-dashboard-react.jsx";

const regularCardStyle = {
  card,
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardHeader: {
    ...cardHeader,
    ...defaultFont
  },
  cardPlainHeader: {
    marginLeft: 0,
    marginRight: 0
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  cardTitle: {
    color: "#FFFFFF",
    marginTop: "0",
    marginBottom: "5px",
    ...defaultFont,
    fontSize: "1.125em"
  },
  cardSubtitle: {
    ...defaultFont,
    marginBottom: "0",
    color: "rgba(255, 255, 255, 0.9)",
    margin: "0 0 10px"
  },
  cardActions: {
    display: "table",
    justifyContent: "space-between",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "10px 0",
  }
};

export default regularCardStyle;
