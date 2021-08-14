import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import VideoPlayer from './components/home/videoPlayer/VideoPlayer';
import {getMatches} from './actions/matches';

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMatches())
    },[dispatch]);


    return(
        <Router>
            <Switch>
                <Route path='match/:id' exact component={VideoPlayer}/>
                <Route path='/auth' exact component={Auth}/>
                <PrivateRoute path='/' exact component={Home}/>
            </Switch>
        </Router>
    )
}

export default App;