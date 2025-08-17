import {createSlice} from "@reduxjs/toolkit";


const initialState={
    name:"",
    street:"",
    pincode:"",
    city:"",
    state:"",
    country:""
};
const addressSlice=createSlice({
    name:"address",
    initialState,
    reducers:{
        setAddress:(state,action)=>{
            return{...state,...action.payload};
        },
            clearAddress:()=>initialState,

      

        },
    

});
export const{setAddress,clearAddress}=addressSlice.actions;
export default addressSlice.reducer;
