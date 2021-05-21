import { combineReducers } from 'redux';
import accountReducer from '../reducers/accountReducer';
import gameReducer from '../reducers/gameReducer';
import adminReducer from '../reducers/adminReducer';


const rootReducer = combineReducers({
    accountReducer, gameReducer, adminReducer
})

export default rootReducer;