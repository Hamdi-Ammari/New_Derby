import {combineReducers} from 'redux';
import matchReducer from './matches';
import authReducer from './auth';
import errorReducer from './errors';
import popUpReducer from './popUp';

export const allReducers = combineReducers({
    matchReducer,
    authReducer,
    errorReducer,
    popUpReducer
})