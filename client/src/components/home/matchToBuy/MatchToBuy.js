import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams,useHistory} from 'react-router-dom';
import {Typography,Container,TextField,CircularProgress, Button} from '@material-ui/core';
import useStyles from './styles';
import visa from './imgs/visa.png';
import master from './imgs/master.png';

import {getMatchToBuy} from '../../../actions/matches';
import { buyMatch } from '../../../actions/matches';

const MatchToBuy = () => {
    const classes = useStyles();
    const {matchToBuy} = useSelector(state => state.matchReducer);
    const {matches} = useSelector(state => state.matchReducer);
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const theMatch = matches.find(m => m._id === id)
    const [matchBuyers,setMatchBuyers] = useState(theMatch?.buyers);
    
    useEffect(() => {
        dispatch(getMatchToBuy(id))
    },[id,dispatch])

    const userId = user?.result.googleId || user?.result?._id;
    const hasBuyedTheMatch = matchBuyers.findIndex(b => b === userId);

    const buyMatchHandler = async (e) => {
        e.preventDefault();
        dispatch(buyMatch(matchToBuy._id));
        if(hasBuyedTheMatch === -1) {
            setMatchBuyers([...matchToBuy.buyers,userId]);
        } 
        history.push('/')
    }


    if(!matchToBuy) return (
        <div className={classes.circularDiv}>
            <CircularProgress size='7rem' thickness={1} className={classes.circular} />
        </div>
    )


    return(
        <div className={classes.buyDivCover}>
            <Container maxWidth='sm' className={classes.buyDiv}>
                <div className={classes.teamsDiv}>
                    <Typography className={classes.team} variant='h5'>{matchToBuy.team1}</Typography>&nbsp;
                    <Typography variant='h6'>-</Typography>&nbsp;
                    <Typography className={classes.team} variant='h5'>{matchToBuy.team2}</Typography>
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
                    <form onSubmit={buyMatchHandler}>
                        <Button type='submit' className={classes.btn} fullWidth>
                            <Typography variant='h6'>Buy</Typography>
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default MatchToBuy;