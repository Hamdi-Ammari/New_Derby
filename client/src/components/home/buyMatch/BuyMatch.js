import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Typography,Container,TextField,CircularProgress, Button} from '@material-ui/core';
import useStyles from './styles';
import visa from './imgs/visa.png';
import master from './imgs/master.png';

import {buyMatch} from '../../../actions/matches';

const BuyMatch = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {id} = useParams();
    const {matchBuyed} = useSelector(state => state.matchReducer);

    useEffect(() => {
        dispatch(buyMatch(id))
    },[id])

    if(!matchBuyed) return (
        <div className={classes.circularDiv}>
            <CircularProgress size='7rem' thickness={1} className={classes.circular} />
        </div>
    )
    

    return(
        <div className={classes.buyDivCover}>
            <Container maxWidth='sm' className={classes.buyDiv}>
                <div className={classes.teamsDiv}>
                    <Typography className={classes.team} variant='h5'>{matchBuyed.team1}</Typography>&nbsp;
                    <Typography variant='h6'>-</Typography>&nbsp;
                    <Typography className={classes.team} variant='h5'>{matchBuyed.team2}</Typography>
                </div>
                <div className={classes.carteBoncair}>
                    <Typography variant='body2'>carte bancaire</Typography>
                    <div>
                        <img src={visa} alt='visa'/>
                        <img src={master} alt='master'/>
                    </div>
                </div>
                <div className={classes.carteNumber}>
                    <TextField variant='outlined' placeholder='Carte Number' required fullWidth/>
                </div>
                <div className={classes.carteExpiration}>
                    <Typography variant='body2'>expiration date</Typography>
                    <div className={classes.carteExpirationFields}>
                        <TextField className={classes.field} variant='outlined' placeholder='MONTH' required/>
                        <TextField className={classes.field} variant='outlined' placeholder='YEAR' required/>
                    </div>
                </div>
                <div className={classes.securityCode}>
                    <Typography variant='body2'>security code</Typography>
                    <div className={classes.securityCodeText}>
                    <TextField className={classes.field} variant='outlined' placeholder='CVV' required/>
                    </div>
                </div>
                <div className={classes.btnDiv}>
                    <Button className={classes.btn} fullWidth>
                        <Typography variant='h6'>PAY : 1 TND</Typography>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default BuyMatch;