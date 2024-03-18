import Cart from "./pages/cart";
import Home from "./pages/home";
import Products from "./pages/products";
import Profile from "./pages/profile";
import Navigation from "./header/nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import data from "./data/product.json";

function App() {
	const [appst, setAppst] = useState({
		profile: {
			name: "Deepak",
			email: "dkyadav.org@gmail.com",
			phone: "9717786299",
		},
		//products: [],
		products: data,
		cart: [],
	});

	// useEffect(()=>{
	//   console.log(data);
	//   setAppst({...appst,products:data});
	// },[]);

	function onClickChange(change_key, change_val) {
		// console.log(change_key);
		// console.log(change_val);


		setAppst({
			...appst,
			profile: {
				...appst.profile,
				[change_key]: change_val,
			},
		});

	}

	function handleCart(id) {
		console.log(id);

		// let temp_product = appst.products.filter(v=>{
		//   if(v.id===id){
		//     return v
		//   }
		// });
		console.log(appst.products);
		let temp_product = appst.products.filter((v) => v.id == id);

		//Add to cart
		//way 1

		let new_cart = appst.cart;
		//temp_product[0].quantity=1;
		new_cart.push({ ...temp_product[0], quantity: 1 });
		console.log(new_cart);
		setAppst({ ...appst, cart: new_cart });
		//way 2
		//setAppst({...appst,cart:[...appst.cart,temp_product[0]]});

		//Decrement from product
		let temp_new_products_state = [...appst.products];
		let update_prod = temp_new_products_state.find((v) => v.id == id);
		update_prod.quantity -= 1;
		setAppst({ ...appst, products: temp_new_products_state });

		console.log(temp_product[0]);
	}

	function handleremoveCart() {}

	return (
		<div>
			<BrowserRouter>
				<Navigation
					uname={appst.profile.name}
					cartitems={appst.cart.length}
				/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/products"
						element={
							<Products
								productlist={appst.products}
								addMeToCart={handleCart}
							/>
						}
					>
						<Route
							path="/products/:productid"
							element={<Products />}
						/>
					</Route>
					<Route
						path="/cart"
						element={
							<Cart
								cartitemlist={appst.cart}
								removeMeToCart={handleremoveCart}
							/>
						}
					/>
					<Route
						path="/profile"
						element={
							<Profile
								appst={appst}
								username={appst.profile.name}
								changeMainSate={(n, v) => onClickChange(n, v)}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
