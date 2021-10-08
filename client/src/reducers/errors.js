const initialState = {
    msg:{},
    status:null,
    id:null
}


const errorReducer = (error = null,action) => {
    switch(action.type){
        case 'GET_ERRORS':
            return {error : action.payload}
        case 'CLEAR_ERRORS':
            return {error:null}
        default:
            return error
    }
}

export default errorReducer;