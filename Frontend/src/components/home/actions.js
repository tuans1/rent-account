import * as constants from  './constants';

export const counterUp = () => {
    return{
        type : constants.COUNTER_UP,
    }
}
export const counterDown = () => {
    return{
        type : constants.COUNTER_DOWN,
    }
}