const matchReducer = (state={matches:[],match:[],buyMatch:[]},action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return {...state,matches:action.payload}
        case 'FETCH_MATCH':
            return {...state,match:action.payload}
        case 'BUY_MATCH':
            return {...state,matchBuyed:action.payload}
        default:
            return state
    }
}

export default matchReducer;