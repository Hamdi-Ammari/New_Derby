import * as api from '../api';

export const getError = (inputValue) => async (dispatch) => {
 try {
     const {data} = await api.registerError(inputValue)
     dispatch({
         type:'GET_ERRORS',
         payload:data
     })
 } catch (error) {
     console.log(error)
 }
}

export const clearError = () => {
    return {
        type:'CLEAR_ERRORS'
    }
}