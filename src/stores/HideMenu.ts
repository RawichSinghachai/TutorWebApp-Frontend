import { createSlice } from "@reduxjs/toolkit";

const Admin = {
    user:'Test',
    Password:'12345',
    hide:true,
    //status true for test
}

export const HideMenu = createSlice({
    name:'HideMenu',
    initialState:Admin,
    reducers:{
        check:(state,action)=>{
            if(action.payload === '/login' || action.payload === '/register'){
                state.hide = false
            }else{
                state.hide = true
            }
        },
    }
})

export const {check} = HideMenu.actions
export default HideMenu.reducer