import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const headerSlice=createSlice({
    name:"headerContent",
    initialState:{
        label:'Dashboard'
    },
    reducers:{
        changeContent:(state,action)=>{
            state.label=action.payload;
        }
    } 
   
})
export const {changeContent}=headerSlice.actions
export default headerSlice.reducer