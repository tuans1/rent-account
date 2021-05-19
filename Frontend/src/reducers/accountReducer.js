export const FETCH_ACCOUNT = "FETCH_ACCOUNT";
export const FETCH_ACCOUNT_SUCCESS = "FETCH_ACCOUNT_SUCCESS";

export const FETCH_CREATE_ACCOUNT = "FETCH_CREATE_ACCOUNT";
export const FETCH_EDIT_ACCOUNT = "FETCH_EDIT_ACCOUNT";
export const FETCH_DELETE_ACCOUNT = "FETCH_DELETE_ACCOUNT";
export const SET_LOGIN_LOADING = "SET_LOGIN_LOADING";

export const ACTIVE_NOTIFY = "ACTIVE_NOTIFY";
const initialState = {
    accounts: [],
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACCOUNT_SUCCESS:
            return { ...state, accounts: action.payload }
        // case FETCH_ACCOUNT_FAIL:
        //     console.log(action.type)
        //     return { ...state }
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
// export const onFetchAccountFail = payload => ({
//     type: FETCH_ACCOUNT_FAIL,
//     payload
// })
// export const onFetchChangePasswordAdmin = payload => ({
//     type: FETCH_CHANGE_PASSWORD_ADMIN,
//     payload
// })
// export const onFetchChangePasswordAdminFail = payload => ({
//     type: FETCH_CHANGE_PASSWORD_ADMIN_FAIL,
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
export const onSetLoginLoading = () => ({
    type: SET_LOGIN_LOADING
})

