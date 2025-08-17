import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "../products/ProductSllice";
import AddressSlice from "../../features/AddressSlice";

const store=configureStore({
    reducer:{
        cart:CartSlice,
        products: ProductSlice,
        address: AddressSlice,
        
        
    }

});
export default store;