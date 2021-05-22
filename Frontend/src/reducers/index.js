import { combineReducers } from 'redux';
import accountReducer from '../reducers/accountReducer';
import gameReducer from '../reducers/gameReducer';
import adminReducer from '../reducers/adminReducer';
import rentHistoryReducer from './rentHistoryReducer';


const rootReducer = combineReducers({
    accountReducer, gameReducer, adminReducer, rentHistoryReducer
})

export default rootReducer;