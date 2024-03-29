import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
	name: "profile",
	initialState: {
		name: "Deepak",
		email: "dkyadav.org@gmail.com",
		phone: "9717786299",
	},
	reducers: {
		updateName: (state, action) => {
			//state.name = action.payload;

			const temp_State = state;
			temp_State.name = action.payload;
			return temp_State;

		},
		updateEmail: (state, action) => {
			state.email = action.payload;
		},
		updatePhone: (state, action) => {
			state.phone = action.payload;
		},
	},
});

export const { updateEmail, updateName, updatePhone } = profileSlice.actions;

export default profileSlice.reducer;