import axios from "axios";
import { GET_BLOGS_REQUEST ,
    GET_BLOGS_SUCESS ,
    GET_BLOGS_FAIL,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCESS,
    CREATE_BLOG_FAIL,
    CREATE_BLOG_RESET,
    BLOG_DETAILS_REQUEST ,
    BLOG_DETAILS_SUCESS,
    BLOG_DETAILS_FAIL,
    UPDATE_BLOG__REQUEST,
    UPDATE_BLOG__SUCESS,
    UPDATE_BLOG_FAIL,
    UPDATE_BLOG_RESET,
    DELETE_BLOG__REQUEST,
    DELETE_BLOG__SUCESS,
    DELETE_BLOG_FAIL,
} from "../constant/blogConstants";





export const getBlogs = (pageNumber = "", pageSize = "") => async (
    dispatch
) =>{
    try{
        dispatch({ type: GET_BLOGS_REQUEST})
        const { data } = await axios.get(`/api/blog?pageNumber =${ pageNumber }&pageSize =${ pageSize }`)
        dispatch({type:GET_BLOGS_SUCESS,payload:data})
    } catch (error)
    {
        dispatch({
            type:GET_BLOGS_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const getBlogDetails = (id) => async (dispatch) =>
{
    try
    {
        dispatch({ type: BLOG_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/blog?${id}`)
        
        dispatch({type:GET_BLOGS_SUCESS,payload:data})
    } catch (error)
    {
        dispatch({
            type:BLOG_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const createBlog = () => async (dispatch,getState) =>{
    try{
        dispatch({ type: CREATE_BLOG_REQUEST })
        const { userLogin: { userInfo },
    } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.token}`,
            },
        }
        const { data } = await axios.post("/api/blog",{},config)
        
        dispatch({type:CREATE_BLOG_SUCESS,payload:data})
    } catch (error)
    {
        dispatch({
            type:CREATE_BLOG_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}



export const updateBlog = (blog) => async (dispatch,getState) =>{
    try{
        dispatch({ type: UPDATE_BLOG__REQUEST })
        const { userLogin: { userInfo },
    } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.token}`,
            },
        }
        const { data } = await axios.put(`/api/blog/${blog._id}`)
        
        dispatch({type:UPDATE_BLOG__SUCESS,payload:data})
    } catch (error)
    {
        dispatch({
            type:UPDATE_BLOG_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}