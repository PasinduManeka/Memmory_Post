import { Link } from "react-router-dom";
import { Container, AppBar, Typography } from "@material-ui/core";
import memories from "./images/memories-word-metal-type-mixed-vintage-printing-blocks-over-grunge-wood-50272791.jpg";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memmories
      </Typography>
      <img
        className={classes.image}
        src={memories}
        alt="memories"
        height="60"
      />
      <div className="twobuttons">
        <div className="navbar links">
          <Link className="mask rgba-red-strong" href="/">
            Home
          </Link>
          <Link className="bg-danger text-white rounded" href="/table">
            Table
          </Link>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
