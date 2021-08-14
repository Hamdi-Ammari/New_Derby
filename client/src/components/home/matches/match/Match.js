import React from 'react';
import { useHistory } from 'react-router-dom';
import {Typography,Button} from '@material-ui/core';
import useStyles from './styles';


const Match = ({match}) => {
    const classes = useStyles();
    const history = useHistory();

    const buyMatch = () => {
        history.push(`/buyMatch/${match._id}`)
    }
    const openVideoPlayer = () => {
        history.push(`/match/${match._id}`)
    }

    return(
        <div className={classes.matchBox}>
            <div className={classes.equipes}>
                <Typography className={classes.equipeText} variant='h6'>{match.team1}</Typography> &nbsp;
                <Typography variant='h6'>-</Typography> &nbsp;
                <Typography className={classes.equipeText} variant='h6'>{match.team2}</Typography>
            </div>
            <div className={classes.matchDate}>
                {match.payed ? (
                    <Typography variant='h6'>
                        {match.payed ? 'started': match.time}
                    </Typography>
                ) : (
                    <Typography variant='h6'>
                        {match.time} 
                    </Typography>
                )}
            </div>
            {match.payed ? (
                <div className={classes.watchMatch}>
                    <Button onClick={openVideoPlayer} className={classes.linkTo}>
                        <Typography className={classes.watchMatchText} variant='body2'>WATCH</Typography>
                    </Button>
                </div>
            ) : (
                <div className={classes.byeMatch}>
                    <Button onClick={buyMatch} className={classes.linkTo}>
                        <Typography className={classes.watchMatchText} variant='body2'>BUY</Typography>
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Match;