export const FETCH_LOGIN = "FETCH_LOGIN";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILED = "FETCH_LOGIN_FAILED";
export const FETCH_RESET_PASSWORD = "FETCH_RESET_PASSWORD";
export const FETCH_RESET_PASSWORD_SUCCESS = "FETCH_RESET_PASSWORD_SUCCESS";
export const FETCH_CHANGE_PASSWORD = "FETCH_CHANGE_PASSWORD";
export const FETCH_CHANGE_PASSWORD_ADMIN = "FETCH_CHANGE_PASSWORD_ADMIN";
export const FETCH_CHANGE_PASSWORD_ADMIN_FAIL = "FETCH_CHANGE_PASSWORD_ADMIN_FAIL";
export const FETCH_CHANGE_PASSWORD_FAIL = "FETCH_CHANGE_PASSWORD_FAIL";
export const SET_LOGOUT = "SET_LOGOUT";

export const ACTIVE_NOTIFY = "ACTIVE_NOTIFY";
const initialState = {
    isLogin: false,
    message: "",
    isLoading: false,
    token: "",
    isSentMail: false,
    isChangeError: false,
    messagePassword: "",
    admin: {}
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_SUCCESS:
            return { ...state, isLogin: true, admin: action.payload }
        // case FETCH_JWT_FAILED:
        //     return { ...state, isLogin: false, isLoading: false, message: action.payload }
        case SET_LOGOUT:
            return { ...state, isLogin: false, admin: {} }
        default:
            return { ...state }
    }
}
export default adminReducer;


export const onFetchLogin = payload => ({
    type: FETCH_LOGIN,
    payload
})

export const onFetchLoginSuccess = payload => ({
    type: FETCH_LOGIN_SUCCESS,
    payload
})

export const onFetchResetPassword = payload => ({
    type: FETCH_RESET_PASSWORD,
    payload
})
export const onFetchChangePassword = payload => ({
    type: FETCH_CHANGE_PASSWORD,
    payload
})
export const onFetchChangePasswordFail = payload => ({
    type: FETCH_CHANGE_PASSWORD_FAIL,
    payload
})
export const onFetchChangePasswordAdmin = payload => ({
    type: FETCH_CHANGE_PASSWORD_ADMIN,
    payload
})
export const onFetchChangePasswordAdminFail = payload => ({
    type: FETCH_CHANGE_PASSWORD_ADMIN_FAIL,
    payload
})
export const onFetchResetPasswordSuccess = payload => ({
    type: FETCH_RESET_PASSWORD_SUCCESS,
    payload
})

export const onSetLogout = () => ({
    type: SET_LOGOUT
})

