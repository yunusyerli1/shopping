import {USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, 
    USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST,
    USER_SIGNOUT_SUCCESS} from '../types';


export const userSigninReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, isOnline: true, userInfo: action.payload,};
        case USER_SIGNIN_FAIL:
            return {loading: false, isOnline:false, error: action.payload};
        case USER_SIGNOUT_SUCCESS:
            return {loading: false, isOnline:false, userInfo: null};
        default:
            return state;
    }
}



export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}