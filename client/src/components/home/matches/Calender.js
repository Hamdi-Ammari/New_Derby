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
        textTransform:'uppercase'
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
    
    /*
    const dayMatches = allMatches.map(m => m.date);
    var today = moment(new Date()).format("DD/MM/YYYY");
    const d = dayMatches.map(m => new Date(m));
    const sortedMatches = d.sort((a,b) => (a.getTime() > b.getTime() ? 1 : -1));
    const momento = sortedMatches.map(mo => moment(mo).format('MM/DD/YYYY'));
    const filt = momento.filter(f => f >= today);
    const theDate = filt[0];

    //var today = moment().format("DD/MM/YYYY");
    //var tomorrow = moment().add(1,'days').format("DD/MM/YYYY");
    //var nexttomorrow = moment().add(2,'days').format("DD/MM/YYYY");
    //const onChangeHandle = (e) => {
         //setDate(e.target.value)
   // }
           <Paper className={classes.dateBox}>
            <Button className={classes.btn} onClick={returnDate}>
                <ArrowLeftIcon fontSize='large' className={classes.arrow}/>
            </Button>
            <Button className={classes.btn} onClick={changeDate}>
                <ArrowRightIcon fontSize='large' className={classes.arrow}/>
            </Button>
           <Typography className={classes.text} variant='h6'>{date}</Typography>
        </Paper>
    */

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


            <Typography className={classes.text} variant='h6'>{date}</Typography>
        </Paper>
    )
}

export default MatchesCalender;