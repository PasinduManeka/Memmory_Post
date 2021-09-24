import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";

import useStyles from "./stytles";
import memories from "../../images/memories-word-metal-type-mixed-vintage-printing-blocks-over-grunge-wood-50272791.jpg";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memmories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
    </AppBar>
  );
};

export default Navbar;