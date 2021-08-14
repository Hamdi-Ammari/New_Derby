import * as api from '../api';

export const googleLogIn = (data) => {
    return {
        type:'AUTH',
        payload:data
    }
}

export const signup = (inputValue,history) => async (dispatch) => {
    try {
        const {data} = await api.signup(inputValue);
        dispatch({
            type:'AUTH',
            payload:data
        })
        history.push('/auth')
    } catch (error) {
        console.log(error)
    }
}

export const signin = (inputValue,history) => async (dispatch) => {
    try {
        const {data} = await api.signin(inputValue);
        dispatch({
            type:'AUTH',
            payload:data
        })
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const logout = () => {
    return {
        type:'LOGOUT'
    }
}