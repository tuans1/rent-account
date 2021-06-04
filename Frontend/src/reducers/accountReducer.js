export const FETCH_ACCOUNT = "FETCH_ACCOUNT";
export const FETCH_ACCOUNT_SUCCESS = "FETCH_ACCOUNT_SUCCESS";

export const FETCH_CREATE_ACCOUNT = "FETCH_CREATE_ACCOUNT";
export const FETCH_EDIT_ACCOUNT = "FETCH_EDIT_ACCOUNT";
export const FETCH_DELETE_ACCOUNT = "FETCH_DELETE_ACCOUNT";
export const SET_ON_LOADING = "SET_ON_LOADING";
export const SET_OFF_LOADING = "SET_OFF_LOADING";

export const FETCH_RENT_ACCOUNT = "FETCH_RENT_ACCOUNT";
const initialState = {
    accounts: [],
    accountLoading: false,
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACCOUNT_SUCCESS:
            return { ...state, accounts: action.payload }
        case SET_ON_LOADING:
            return { ...state, accountLoading: true }
        case SET_OFF_LOADING:
            return { ...state, accountLoading: false }
        default:
            return { ...state }
    }
}
export default accountReducer;


export const onFetchAccount = () => ({
    type: FETCH_ACCOUNT,
})


export const onFetchAccountSuccess = payload => ({
    type: FETCH_ACCOUNT_SUCCESS,
    payload
})
// export const onFetchChangePasswordAdmin = payload => ({
//     type: FETCH_CHANGE_PASSWORD_ADMIN,
//     payload
// })
export const onFetchCreateAccount = payload => ({
    type: FETCH_CREATE_ACCOUNT,
    payload
})
export const onFetchEditAccount = payload => ({
    type: FETCH_EDIT_ACCOUNT,
    payload
})
export const onFetchDeleteAccount = payload => ({
    type: FETCH_DELETE_ACCOUNT,
    payload
})
export const onSetLoading = () => ({
    type: SET_ON_LOADING
})

export const onFetchRentAccount = payload => ({
    type: FETCH_RENT_ACCOUNT,
    payload
})
