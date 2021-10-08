import React from 'react';
import { useHistory } from 'react-router-dom';
import {Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
    btn:{
        height:'11vh'
    },
    logo:{
        color:'#fff',
        textTransform:'uppercase',
        letterSpacing:'2px',
        cursor:'pointer',
        fontSize:'38px',
        [theme.breakpoints.down('sm')] : {
            marginTop:'5px',
            fontSize:'28px'
         },
    }
}))


const Logo = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleSubmit = () => {
        history.push(`/`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <Button type='submit' className={classes.btn}>
                <Typography className={classes.logo} variant='h2'>new derby</Typography>
            </Button>
        </form>
    )
}

export default Logo;