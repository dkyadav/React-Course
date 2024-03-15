import { BrowserRouter, Link } from "react-router-dom";

export default function Navigation({uname,cartitems}) {
	return (
		<ul>
			<li>
				{/* <a class="active" href=""> */}

				<Link to="/">
					<span>My App</span>
				</Link>

				{/* </a> */}
			</li>
			<li>
				<Link to="/products">Product</Link>
			</li>
			<li>
				<Link to="/profile">Profile</Link>
			</li>
			<li>
				<Link to="/cart">Cart {cartitems}</Link>
			</li>
            <li style={{color:'red'}}>
                Welcome {uname}
            </li>
		</ul>
	);
}
