import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//import moment from 'moment';
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './nav/Nav';
import Matches from './matches/Matches';
import VideoPlayer from './videoPlayer/VideoPlayer';
import BuyMatch from './buyMatch/BuyMatch';

const useStyles = makeStyles({
    container:{
        background:'#2C3E50',
        minHeight:'100vh',
        paddingTop:'5vh',
    }
})

const Home = () => {
    const classes = useStyles();
    //var today = moment().format("DD/MM/YYYY");
    const [date,setDate] = useState('today');
    return(
        <Container maxWidth='lg' className={classes.container}>
            <Nav date={date} setDate={setDate}/>
            <Router>
               <Switch>
                   <Route path='/' exact component={() => (<Matches date={date} setDate={setDate} />)}/>
                   <Route path='/buyMatch/:id' exact component={BuyMatch}/> 
                   <Route path='/match/:id' exact component={VideoPlayer}/> 
                </Switch>
            </Router>
        </Container>
    )
}

export default Home;