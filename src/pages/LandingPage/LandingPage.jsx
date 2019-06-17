import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaEnvelope } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import logo from "assets/img/LogoOutline.png"
import skyline from "assets/img/skyline.png"

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Heroes Initiative"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={skyline}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={8} sm={8} md={6}>
                <div className="hero">
                  <img className={classes.heroLogo} src={logo} />
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} className={classes.hero}>
                <h1 className={classes.title}>heroes</h1>  
                <h2 className={classes.subtitle}>bettering our systems of care, together.</h2>
                <br />
                <Button
                  color="info"
                  size="lg"
                  href="mailto:hello@heroesnetwork.us?Subject=Let's%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                  Get in touch
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        {/*
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
            <p>Add sections here</p>
          </div>
        </div>
        */}
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
