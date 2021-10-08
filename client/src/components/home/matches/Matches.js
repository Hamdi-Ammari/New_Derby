import React from 'react';
import {useSelector} from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import Match from './match/Match';
import Calender from './Calender';



const Matches = ({date,setDate}) => {
    const classes = useStyles();
    const {matches} = useSelector(state => state.matchReducer);
    const dayMatches = matches.filter(m => m.date === date);
    const sortedMatches = dayMatches.sort((a,b) => (a.time > b.time ? 1 : -1));

    return(
        <>
            <div className={classes.calendarDiv}>
                <Calender date={date} setDate={setDate}/>
            </div>
            {!sortedMatches.length ? (
                <div className={classes.circularDiv}>
                    <CircularProgress size='7rem' thickness={1} className={classes.circular} />
                </div>
            ): (
            <>
            <div className={classes.matchesContainer}>
                {sortedMatches.map(match => (
                    <Match key={match._id} match={match}/>
                ))}
            </div>
            </>
            )}
        </>
    )
    
    
}
export default Matches;