import { combineReducers } from 'redux';
import accountReducer from '../reducers/accountReducer';
import gameReducer from '../reducers/gameReducer';
import adminReducer from '../reducers/adminReducer';
import rentHistoryReducer from './rentHistoryReducer';
import priceReducer from './priceReducer';

const rootReducer = combineReducers({
    accountReducer, gameReducer, adminReducer, rentHistoryReducer, priceReducer
})

export default rootReducer;