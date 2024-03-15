import { createSlice } from "@reduxjs/toolkit";

import data from "../../data/product.json"

const productSlice = createSlice({
	name: "products",
	initialState: data,
	reducers: {
		decrementQuantity: (state, action) => {
			
			// let temp_new_products_state = [...appst.products];
			// let update_prod = temp_new_products_state.find(v => v.id ==id);
			// update_prod.quantity -= 1;
			// setAppst({...appst,products:temp_new_products_state});
			console.log(state[0].quantity);

			console.log(action.payload.quantity)
			let newstr = {...action.payload,quantity:5}
			//action.payload.quantity= 5;
			console.log(newstr);

			let temp_state = [...state];
			let update_prod = temp_state.find(v => v.id ===action.payload.id);
			update_prod.quantity -= 1;
			state = [...temp_state,newstr]
		},
		updateEmail: (state, action) => {
			state.email = action.payload;
		},
		updatePhone: (state, action) => {
			state.phone = action.payload;
		},
	},
});

export const { updateEmail, decrementQuantity, updatePhone } = productSlice.actions;

export default productSlice.reducer;