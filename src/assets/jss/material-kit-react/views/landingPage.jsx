import { container, title } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = {
  hero: {
    textAlign: "center"
  },
  heroLogo: {
    display: "block",
    margin: "auto",
    width: "60%",
    maxHeight: "30%"
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "block",
    margin: "auto",
    fontSize: "3.5rem",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.8rem",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
