export const FETCH_STAFF = "FETCH_STAFF";
export const FETCH_STAFF_SUCCESS = "FETCH_STAFF_SUCCESS";

const initialState = {
    staff : [],
    totalPage : 1,
    loadingList : true,
};

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STAFF_SUCCESS : 
        return {...state, staff : action.payload.records ,totalPage : action.payload.total ,loadingList : false}
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