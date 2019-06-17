import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// React icons
import { FaComments } from 'react-icons/fa';

// @material-ui/icons
import LiveTv from "@material-ui/icons/LiveTv";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>How?</h2>
            <h5 className={classes.description}>
            We are working with agencies to solve challenges and improve family outcomes, 
            by using the rich and varied experiences of on-the-ground experts to guide 
            development of tools, content, and services.
            </h5>
            <h5 className={classes.description}>
            Are you a hero?
            </h5>
          </GridItem>
        </GridContainer>
        <div>
        <Button
          color="primary"
          size="lg"
          onClick={() => window.$crisp.push(['do', 'chat:open'])}
        >
          <FaComments />
          Get in touch
        </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
