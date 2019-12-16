const initialState = {
    leversState: 0
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case "SET_LEVERS":
            return {
            leversState: action.payload
        }
        default:  
            return state;
    }
}

export default reducer;