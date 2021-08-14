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

export const getMatch = (id) => async (dispatch) => {
    try {
        const {data} = await api.getMatch(id);
        dispatch({
            type:'FETCH_MATCH',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const buyMatch = (id) => async (dispatch) => {
    try {
        const {data} = await api.buyMatch(id);
        dispatch({
            type:'BUY_MATCH',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}