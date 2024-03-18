import { createSlice,current } from "@reduxjs/toolkit";

import data from "../../data/product.json"

const productSlice = createSlice({
	name: "products",
	initialState: data,
	reducers: {
		decrementQuantity: (state, action) => {
			console.log(state[0].quantity);
			console.log(action.payload)
			
			// let temp_state = [...state];
			// let update_prod = temp_state.find(v => v.id ===action.payload.id);
			// update_prod.quantity -= 1;
			console.log(current(state.find(v => v.id ===action.payload.id)))

			state.find(current_state_item => current_state_item.id ===action.payload.id).quantity-=1;
				
		},
		updateEmail: (state, action) => {
			state.email = action.payload;
		},
		updatePhone: (state, action) => {
			state.phone = action.payload;
		},
		incrementQuantity: (state, action) => {
			console.log(current(state.find(v => v.id ===action.payload.id)))
			state.find(v => v.id ===action.payload.id).quantity+=1;
		}
	},
});

export const { updateEmail, decrementQuantity, updatePhone, incrementQuantity } = productSlice.actions;

export default productSlice.reducer;