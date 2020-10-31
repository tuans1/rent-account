export const INCREMENT = "staff/counter/increment";
const DECREMENT = "staff/counter/decrement";

const initialState = {
    counter : 0
};

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT : 
        return {...state,counter : state.counter + 1 }
        case DECREMENT : 
        return {...state,counter : state.counter - 1 }
        default:
            return { ...state }
    }
}
export default staffReducer


export const increment = () => ({
    type : INCREMENT
})

export const decrement = () => ({
    type : DECREMENT
})