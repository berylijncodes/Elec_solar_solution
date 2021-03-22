import {GET_BLOGS_REQUEST ,
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
} from "../constant/blogConstants"

export const blogListReducers = (state = { blogs: [] }, action) =>{
    switch (action.type){
        case GET_BLOGS_REQUEST:
            return { loading: true, blogs: [] }
        case GET_BLOGS_SUCESS:
            return {
                loading: false,
                blogs: action.payload.blogs, pages: action.payload.pages,
                page:action.payload.page,
            }
        case GET_BLOGS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const blogCreateReducer = (state = { blog: {}}, action) =>{
    switch (action.type){
        case CREATE_BLOG_REQUEST:
            return { loading: true, blog: {}}
        case CREATE_BLOG_SUCESS:
            return {
                loading: false,
                sucess:true,
                blog: action.payload,
            }
        case CREATE_BLOG_FAIL:
            return { loading: false, error: action.payload }
        case CREATE_BLOG_RESET:
            return{}
        default:
            return state
    }
}


export const blogDeleteReducer = (state =  {}, action) =>{
    switch (action.type){
        case DELETE_BLOG__REQUEST:
            return { loading: true }
        case DELETE_BLOG__SUCESS:
            return {
                loading: false,
                sucess:true,
            }
        case DELETE_BLOG_FAIL:
            return { loading: false, error: action.payload }
    
        default:
            return state
    }
}

export const blogDetailsReducer = (state = { blog: {} }, action) =>{
    switch (action.type){
        case BLOG_DETAILS_REQUEST:
            return { loading: true,...state}
        case BLOG_DETAILS_SUCESS:
            return {
                loading: false,
                sucess: true,
                blog: action.payload
            }
        case BLOG_DETAILS_FAIL:
            return { loading: false, error: action.payload }
    
        default:
            return state
    }
}


export const blogUpdateReducer = (state = { blog: {} }, action) =>{
    switch (action.type){
        case UPDATE_BLOG__REQUEST:
            return { loading: true, blog:{}}
         case UPDATE_BLOG__SUCESS:
            return {
                loading: false,
                sucess: true,
                blog: action.payload
            }
        case UPDATE_BLOG_FAIL:
            return { loading: false, error: action.payload }
             
        case UPDATE_BLOG_RESET:
            return{blog:{}}
        default:
            return state
    }
}