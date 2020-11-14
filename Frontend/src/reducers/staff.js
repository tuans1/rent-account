export const FETCH_STAFF = "FETCH_STAFF";
export const FETCH_STAFF_SUCCESS = "FETCH_STAFF_SUCCESS";
export const FETCH_CREATE_STAFF = "FETCH_CREATE_STAFF";
export const GET_UPDATE_STAFF = "GET_UPDATE_STAFF";
export const SET_UPDATE_STAFF = "SET_UPDATE_STAFF";
export const FETCH_UPDATE_STAFF = "FETCH_UPDATE_STAFF";
export const SET_STAFF_REQUESTING = "SET_STAFF_REQUESTING";
export const ACTIVE_NOTIFY = "ACTIVE_NOTIFY";
const initialState = {
    staff: [],
    totalPage: 1,
    loadingList: true,
    updateStaff: {
        staffName: "",
        phone: "",
        address: "",
        position: "",
        salary: "",
        bankAccount: "",
        joiningDate: "",
    },
};

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STAFF_SUCCESS:
            return { ...state, staff: action.payload.records, totalPage: Math.ceil(action.payload.total / 10), loadingList: !state.loadingList }
        case SET_UPDATE_STAFF:
            var dateParts = action.payload.joiningDate.split("-");
            action.payload.joiningDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
            return { ...state, updateStaff: action.payload }
        case SET_STAFF_REQUESTING :
            return {...state ,loadingList : true}
        default:
            return { ...state }
    }
}
export default staffReducer;


export const onFetchStaff = payload => ({
    type: FETCH_STAFF,
    payload
})

export const onFetchStaffSuccess = payload => ({
    type: FETCH_STAFF_SUCCESS,
    payload
})
export const onFetchCreateStaff = payload => ({
    type: FETCH_CREATE_STAFF,
    payload
})
export const onGetUpdateStaff = payload => ({
    type: GET_UPDATE_STAFF,
    payload
})
export const onSetUpdateStaff = payload => ({
    type: SET_UPDATE_STAFF,
    payload
})
export const onFetchUpdateStaff = payload => ({
    type: FETCH_UPDATE_STAFF,
    payload
})
export const onSetStaffRequesting = () => ({
    type: SET_STAFF_REQUESTING,
})
export const onActiveNotify = payload => ({
    type: SET_STAFF_REQUESTING,
    
})
