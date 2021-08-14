import React from 'react';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import UserIcon from './user/UserIcon';

 const useStyles = makeStyles((theme) => ({
    paper:{
        background:'#2C3E50',
        height:'12vh',
        padding:'0 20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        [theme.breakpoints.down('xs')] : {
           alignItems:'center',
           position:'relative'
        },
    }
}))

const Nav = ({date,setDate}) => {
    const classes = useStyles();
    return(
        <Paper className={classes.paper}>
            <Logo/>
            <UserIcon/>
        </Paper>
    )
}

export default Nav;