import React from 'react';

import useStyles from './styles';

const Post = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.title}><h1>Post</h1></div>
        
     );
}
 
export default Post;