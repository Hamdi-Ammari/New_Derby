import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/home/Home';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import {getMatches} from './actions/matches';

const App = () => {
    const dispatch = useDispatch();
    const {matchToBuy} = useSelector(state => state.matchReducer);
    
    useEffect(() => {
        dispatch(getMatches());
    },[dispatch,matchToBuy]);



    return(
        <Router>
            <Switch>
                <PrivateRoute path='/' exact component={Home}/>
                <Route path='/auth/register' exact component={Register}/>
                <Route path='/auth/login' exact component={Login}/>
            </Switch>
        </Router>
    )
}

export default App;