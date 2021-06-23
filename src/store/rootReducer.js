import { combineReducers } from "redux";
import updateReducer from './reducers/updateReducer'


const rootReducer = combineReducers({
    update: updateReducer
})

export default rootReducer;