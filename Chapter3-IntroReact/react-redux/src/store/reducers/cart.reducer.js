import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addCart: (state, action) => {
			//state.name = action.payload;
			state.push(action.payload)
		},
		removeCart: (state, action) => {
			// console.log(action);
			// console.log(current(state));
			// state = [...state.filter(item=>item.id != action.payload)];
			return state.filter(item=>item.id != action.payload);
			//return [...state.filter(item=>item.id != action.payload)];
			//console.log(current(state));

// 			let temp_state = state;
// 			temp_state.filter(item=>item.id != action.payload);
// 			//temp_state.pop();
// 			state = [...temp_state];
			
// 			...state,
//   items: state.items.filter(item => item !== action.payload),
//   lastUpdated: Date.now() 
			
			// console.log(action.payload);
			// const cur_id = action.payload;
			// let temp_state = [...state];

			// temp_state.filter((item,index)=>{
			// 	console.log(item.id, cur_id)
			// 	if(item.id!=cur_id){
			// 		console.log('match found');
			// 		temp_state.splice(index, 1);
			// 		return item;
			// 	}
					
			// });
			// console.log(temp_state);
			// state = temp_state.pop;
			//state.email = action.payload;
		}
	},
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;