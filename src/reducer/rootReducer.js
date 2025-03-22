import { combineReducers } from "@reduxjs/toolkit";
import headerReducer from './headerSlice'
import authReducer from './auth/authSlice'
const rootReducer=combineReducers({
    headerContent:headerReducer,
    auth:authReducer,
  },
)
export default rootReducer