import { Outlet, Link,NavLink } from "react-router-dom";

const Layout = () => {
    const padLink = {
        padding: "10px"
    }

	return (
		<>
			<nav>
				<Link to="/" style={padLink}>Home</Link>
				<Link to="/blogs" style={padLink}>Blogs</Link>
				<NavLink 
					to="/contact" 
					style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
					Contact
				</NavLink>
                <Link to="/user" style={padLink}>User</Link>
                
				{/* <Link to="/user/" style={padLink}>UserProfile</Link>
				<Link to="/user/info" style={padLink}>UserInfo</Link> */}
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
