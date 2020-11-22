import './App.css';
import PostList from './components/PostList/postList';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import useStyles from './styles';

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getPosts } from './api';


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
    
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              {/* <PostList></PostList> */}
              POST
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostList></PostList>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
