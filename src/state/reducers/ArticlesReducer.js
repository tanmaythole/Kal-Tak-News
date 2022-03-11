const articlesReducer = (state=[], action) => {
    switch (action.type) {
        case "RESET_ARTICLES":
            return [];
        
        case "ADD_ARTICLES":
            return state.concat(action.payload)

        default:
            return state;
    }
}

export default articlesReducer;