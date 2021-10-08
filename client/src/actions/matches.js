import * as api from '../api';

export const getMatches = () => async (dispatch) => {
    try {
        const {data} = await api.getMatches();
        dispatch({
            type:'FETCH_ALL',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const watchMatch = (id) => async (dispatch) => {
    try {
        const {data} = await api.watchMatch(id);
        dispatch({
            type:'WATCH_MATCH',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getMatchToBuy = (id) => async (dispatch) => {
    try {
        const {data} = await api.getMatchToBuy(id);
        dispatch({
            type:'MATCH_TO_BUY',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const buyMatch = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const {data} = await api.buyMatch(id,user?.token);
        dispatch({
            type:'BUY_MATCH',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}
