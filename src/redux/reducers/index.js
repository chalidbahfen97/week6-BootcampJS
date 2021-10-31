import { combineReducers } from "redux";
import categoryReducer from "./Categories";

const rootReducer = combineReducers({
    categoryState : categoryReducer
})

export default rootReducer;