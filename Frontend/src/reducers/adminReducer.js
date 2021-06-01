export const FETCH_LOGIN = "FETCH_LOGIN";
export const FETCH_LOGIN_FACEBOOK = "FETCH_LOGIN_FACEBOOK";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_ADMIN = "FETCH_ADMIN";
export const FETCH_ADMIN_SUCCESS = "FETCH_ADMIN_SUCCESS";
export const FETCH_LOGIN_FAILED = "FETCH_LOGIN_FAILED";
export const FETCH_RESET_PASSWORD = "FETCH_RESET_PASSWORD";
export const FETCH_RESET_PASSWORD_SUCCESS = "FETCH_RESET_PASSWORD_SUCCESS";
export const FETCH_CHANGE_PASSWORD = "FETCH_CHANGE_PASSWORD";
export const FETCH_CHANGE_PASSWORD_ADMIN = "FETCH_CHANGE_PASSWORD_ADMIN";
export const FETCH_CHANGE_PASSWORD_ADMIN_FAIL = "FETCH_CHANGE_PASSWORD_ADMIN_FAIL";
export const SET_LOGOUT = "SET_LOGOUT";

export const ACTIVE_NOTIFY = "ACTIVE_NOTIFY";
const initialState = {
    isLogin: false,
    adminSuccess: false,
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
            return { ...state, isLogin: true }
        case FETCH_ADMIN_SUCCESS:
            return { ...state, adminSuccess: !state.adminSuccess }
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
export const onFetchLoginFacebook = payload => ({
    type: FETCH_LOGIN_FACEBOOK,
    payload
})

export const onFetchLoginSuccess = () => ({
    type: FETCH_LOGIN_SUCCESS,
})

export const onFetchAdmin = () => ({
    type: FETCH_ADMIN,
})
export const onFetchAdminSuccess = () => ({
    type: FETCH_ADMIN_SUCCESS,
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

