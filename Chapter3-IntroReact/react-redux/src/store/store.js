import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile.reducer";
import productReducer from "./reducers/product.reducer";
import cartReducer from "./reducers/cart.reducer";

export default configureStore({
	reducer: {
        profile: profileReducer,
        products: productReducer,
        // cart: cartReducer,
    },
});
