export const FETCH_STAFF = "FETCH_STAFF";
export const FETCH_STAFF_SUCCESS = "FETCH_STAFF_SUCCESS";
export const FETCH_CREATE_STAFF = "FETCH_CREATE_STAFF";
export const GET_UPDATE_STAFF = "GET_UPDATE_STAFF";
export const SET_UPDATE_STAFF = "SET_UPDATE_STAFF";
const initialState = {
    staff : [],
    totalPage : 1,
    loadingList : true,
    updateStaff : {}
};

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STAFF_SUCCESS : 
        return {...state, staff : action.payload.records ,totalPage : action.payload.total ,loadingList : false}
        case SET_UPDATE_STAFF :
            console.log(action.payload)
        return {...state,updateStaff : ""}
        default:
            return { ...state }
    }
}
export default staffReducer;


export const onFetchStaff = () => ({
    type : FETCH_STAFF
})

export const onFetchStaffSuccess = payload => ({
    type : FETCH_STAFF_SUCCESS,
    payload
})
export const onFetchCreateStaff = payload => ({
    type : FETCH_CREATE_STAFF,
    payload
})
export const onGetUpdateStaff = () => ({
    type : GET_UPDATE_STAFF,
})
export const onSetUpdateStaff = payload => ({
    type : SET_UPDATE_STAFF,
    payload
})