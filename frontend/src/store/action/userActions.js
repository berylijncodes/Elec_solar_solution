/* eslint-disable no-undef */
import
    {
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCESS,
        USER_LOGIN_FAIL,
        USER_LOGINOUT,
} from "../constant/userConstants"

export const login = (email, password) => async (dispatch) =>{
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }

        const { data } = await axios.post("/api/user/login",
    { email, password }, config
)
        dispatch({ type: USER_LOGIN_SUCESS, payload: data })
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:error.response && error.resonse.data.message ? error.resonse.data.message:error.message,
        })
    }
}

export const logout = (dispatch) =>{
    localStorage.removeItem("userInfo")
    dispatch({type:USER_LOGINOUT})
}