import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories-word-metal-type-mixed-vintage-printing-blocks-over-grunge-wood-50272791.jpg';
import useStyles from './styles';

const APP = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);
    return ( 
        <Container maxisth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memmories</Typography>
                <img className={classes.image} src={memories}  alt="memories" height="60" />
            </AppBar>
            {/*Grow just provide simple animation*/}
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        {/* xs means takes full length of thr xtra small devices 
                        am means it takes seven out of whol size.*/}
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
     );
}
 
export default APP;