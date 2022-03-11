export const progress = (e) => {
    return {
        type: "PROGRESS"
    }
}

export const setProgress = (data) => {
    return {
        type: "SET_PROGRESS",
        payload: data
    }
}