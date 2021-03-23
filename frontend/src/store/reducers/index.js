import { combineReducers } from "redux"

//import reducers
import {userLoginReducer} from "./userReducers"
import {blogListReducers,blogCreateReducer,blogDeleteReducer,blogDetailsReducer, blogUpdateReducer}  from "./blogReducers"

export default combineReducers({
    userLogin: userLoginReducer,
    blogList: blogListReducers,
    bloCreate: blogCreateReducer,
    blogDelete: blogDeleteReducer,
    blogDetails: blogDetailsReducer,
    blogUpdate: blogUpdateReducer,
});

