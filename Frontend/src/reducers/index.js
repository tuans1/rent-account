import {combineReducers} from 'redux';
import staffReducer from './staff';
import loginReducer from './login';
// import homeReducer from '../components/home/reducer';


const rootReducer = combineReducers({
    staffReducer ,loginReducer
}) 

export default rootReducer;