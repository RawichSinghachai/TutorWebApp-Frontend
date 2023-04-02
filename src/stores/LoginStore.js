import { createSlice } from "@reduxjs/toolkit";

const Admin = {
    user:'Test',
    Password:'12345',
    hide:true,
    //status true for test
}

export const LoginStore = createSlice({
    name:'LoginStore',
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

export const {check} = LoginStore.actions
export default LoginStore.reducer