export const FETCH_JWT = "FETCH_JWT";
export const FETCH_JWT_SUCCESS = "FETCH_JWT_SUCCESS";
export const FETCH_JWT_FAILED = "FETCH_JWT_FAILED";

export const ACTIVE_NOTIFY = "ACTIVE_NOTIFY";
const initialState = {
    isLogin : false
};

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JWT_SUCCESS : 
            return {...state,isLogin : true}
        case FETCH_JWT_FAILED :
            return {...state,isLogin : false}
        default:
            return { ...state }
    }
}
export default staffReducer;


export const onFetchJwt = payload => ({
    type: FETCH_JWT,
    payload
})

export const onFetchJwtSuccess = () => ({
    type: FETCH_JWT_SUCCESS
})

export const onFetchJwtFailed = () => ({
    type: FETCH_JWT_FAILED
})

