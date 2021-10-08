import React from 'react';
import {Paper,Typography,Button} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dateBox:{
        width:'250px',
        height:'40px',
        background:'#2C3E50',
        textAlign:'center',
        color:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        position:'relative'
    },
    text:{
        textTransform:'uppercase',
        fontSize:'18px'
    },
    btnRight:{
        position:'absolute',
        right:'0px',
        height:'40px',

    },
    btnLeft:{
        position:'absolute',
        left:'0px',
        height:'40px',
    },
    arrow:{
        color:'#fff'
        
    }
})

const MatchesCalender = ({date,setDate}) => {
    const classes = useStyles();
    const changeDate = () => {
        setDate('tomorrow')
    }
    const returnDate = () => {
        setDate('today')
    }

    return(
        <Paper className={classes.dateBox}>
            {date === 'today' ? (
                <Button className={classes.btnRight} onClick={changeDate}>
                    <ArrowRightIcon fontSize='large' className={classes.arrow}/>
                </Button>
            ) : (
                <Button className={classes.btnLeft} onClick={returnDate}>
                    <ArrowLeftIcon fontSize='large' className={classes.arrow}/>
                </Button>
            )}


            <Typography className={classes.text} variant='h1'>{date}</Typography>
        </Paper>
    )
}

export default MatchesCalender;