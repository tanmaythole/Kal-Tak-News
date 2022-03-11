export const setProgress = (data) => {
    return {
        type: "SET_PROGRESS",
        payload: data
    }
}

export const resetArticles = (data) => {
    return {
        type: "RESET_ARTICLES",
        payload: data
    }
}

export const addArticles = (data) => {
    return {
        type: "ADD_ARTICLES",
        payload: data
    }
}
