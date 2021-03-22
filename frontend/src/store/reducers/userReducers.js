import
    {
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCESS,
        USER_LOGIN_FAIL,
        USER_LOGINOUT,
} from "../constant/userConstants"
    
export const useLoginReducer = (state = {}, action) =>{
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGINOUT:
            return {}
        default:
            return state
    }
}