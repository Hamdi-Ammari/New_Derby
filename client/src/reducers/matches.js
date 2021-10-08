const matchReducer = (state={matches:[],matchToWatch:[],matchToBuy:[],myMatches:[]},action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return {...state,matches:action.payload}
        case 'WATCH_MATCH':
            return {...state,matchToWatch:action.payload}
        case 'MATCH_TO_BUY':
            return {...state,matchToBuy:action.payload}
        case 'BUY_MATCH':
            return {...state,matches:state.matches.map(match => match._id === action.payload._id ? action.payload : match)}
        case 'FETCH_MY_MATCHES':
            return {...state,myMatches:action.payload}
        default:
            return state
    }
}

export default matchReducer;