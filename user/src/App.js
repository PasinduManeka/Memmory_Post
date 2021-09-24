import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Posts/table";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories-word-metal-type-mixed-vintage-printing-blocks-over-grunge-wood-50272791.jpg";
import useStyles from "./styles";

const APP = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Router>
      <Container className="App">
        <Navbar />
        <div className="">
          <Switch>
            <Route exact path="/">
              <Container maxisth="lg">
                {/*Grow just provide simple animation*/}
                <Grow in>
                  <Container>
                    <Grid
                      className={classes.mainContainer}
                      container
                      justifyContent="space-between"
                      alignItems="stretch"
                      spacing={3}
                    >
                      {/* xs means takes full length of thr xtra small devices 
                        am means it takes seven out of whol size.*/}
                      <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Form
                          currentId={currentId}
                          setCurrentId={setCurrentId}
                        />
                      </Grid>
                    </Grid>
                  </Container>
                </Grow>
              </Container>
            </Route>
            <Route path="/table">
              <Table />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

export default APP;
