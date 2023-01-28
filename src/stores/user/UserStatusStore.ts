import { createSlice } from "@reduxjs/toolkit";

const User = {
    user:'name',
    name:'name',
    password:'password',
    status:true
    //status:true for test
}

export const UserStatusStore = createSlice({
    name:'UserStatusStore',
    initialState:User,
    reducers:{
        save:(state,action)=>{
            state.name = action.payload[0].name
            state.password = action.payload[0].password
            state.status = action.payload[0].status
        },
        setuser:(state,action)=>{
            state.user = action.payload
        },
    }
})

export const {save,setuser} = UserStatusStore.actions
export default UserStatusStore.reducer