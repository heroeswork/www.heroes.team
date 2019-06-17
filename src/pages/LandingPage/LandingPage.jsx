import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaPlay } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

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
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>bettering our systems of care, together.</h1>
                <h4>
                  We are working with agencies to solve challenges and improve 
                  family outcomes, by using the rich and varied experiences of on-the-ground 
                  experts to guide development of tools, content, and services.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="#"
                >
                  Learn more
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        {/* 
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            Add sections here
          </div>
        </div>
        */}
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
