import {combineReducers} from 'redux';
import staffReducer from '../components/staff/reducer';
import homeReducer from '../components/home/reducer';


const rootReducer = combineReducers({
    staffReducer ,homeReducer
}) 

export default rootReducer;