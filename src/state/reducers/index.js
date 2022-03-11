import progressReducer from "./ProgressReducer";
import articlesReducer from "./ArticlesReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    progressReducer,
    articlesReducer
});

export default rootReducer;