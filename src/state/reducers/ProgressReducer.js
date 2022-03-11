const progressReducer = (state=0, action) => {
    switch (action.type) {
        case "PROGRESS":
            return state
    
        case "SET_PROGRESS":
            return action.payload
        
        default:
            return state;
            
    }
}

export default progressReducer;