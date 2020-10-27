import * as constants from './constants';


const initialState = {
    counter : 10
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case constants.COUNTER_UP : 
            return {...newState,counter : newState.counter + 1 };
        case constants.COUNTER_DOWN :
            return {...newState,counter : newState.counter - 1 };
        default: return state;
    }
}

export default reducer;