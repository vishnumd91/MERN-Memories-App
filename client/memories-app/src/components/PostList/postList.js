import React from 'react';
import Post from './Post/post';
import useStyles from './style';

import {useSelector} from 'react-redux';

function PostList() {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log('Posts =>', posts);
    return (
        <div>
            <Post></Post>
        </div>
    )
}

export default PostList
