import React from 'react';
import {Container, AppBar, Typography, Grow,Grid} from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

const APP = () => {
    return ( 
        <Container maxisth="lg">
            <AppBar position="statsic" color="inherit">
                <Typography variant="h2" align="center">Memmories</Typography>
                <img src={memories}  alt="memories" height="500" />
            </AppBar>
            {/*Grow just provide simple animation*/}
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
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