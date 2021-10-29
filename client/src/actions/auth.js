import * as api from '../api';

export const googleLogIn = (data) => {
    return {
        type:'AUTH',
        payload:data
    }
}

export const signup = (inputValue) => async (dispatch) => {
    try {
        const {data} = await api.register(inputValue);
        dispatch({
            type:'AUTH',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signin = (inputValue) => async (dispatch) => {
    try {
        const {data} = await api.login(inputValue);
        dispatch({
            type:'AUTH',
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const logout = () => {
    return {
        type:'LOGOUT'
    }
}
