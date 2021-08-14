import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams,useHistory} from 'react-router-dom';
import {Typography,CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {getMatch} from '../../../actions/matches';

const useStyles = makeStyles({
    matchInfo:{
        display:'flex',
    },
    circularDiv:{
        minHeight:'75vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    circular:{
        color:'#fff',
    }
})
 
const VideoPlayer = () => {
    const classes = useStyles();
    const {match} = useSelector(state => state.matchReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getMatch(id))
    },[id])

    if(!match) return (
        <div className={classes.circularDiv}>
            <CircularProgress size='7rem' thickness={1} className={classes.circular} />
        </div>
    )

    return(
        <div className={classes.matchInfo}>
            <Typography variant='h6'>{match.team1}</Typography> &nbsp;
            <Typography variant='h6'>-</Typography> &nbsp;
            <Typography variant='h6'>{match.team2}</Typography>
        </div>
    )
}

export default VideoPlayer;