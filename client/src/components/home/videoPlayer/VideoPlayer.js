import React,{useEffect} from 'react';
import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from 'react-player';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Container,Paper,Typography,CircularProgress} from '@material-ui/core';

import useStyles from './styles';

import {watchMatch} from '../../../actions/matches';
import derby from './derby.jpg';
 
const VideoPlayer = () => {
    const classes = useStyles();
    const {matchToWatch} = useSelector(state => state.matchReducer);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(watchMatch(id))
    },[id])

    if(!matchToWatch) return (
        <div className={classes.circularDiv}>
            <CircularProgress size='7rem' thickness={1} className={classes.circular} />
        </div>
    )

    return(
        <Container className={classes.container}>
            <Paper elevation={4} className={classes.matchInfo}>
                <Typography variant='h6'>{matchToWatch.team1}</Typography> &nbsp;
                <Typography variant='h6'>-</Typography> &nbsp;
                <Typography variant='h6'>{matchToWatch.team2}</Typography>
            </Paper>
            <div>
                <img src={derby} alt='derby'/>
            </div>
        </Container>
    )
}

export default VideoPlayer;