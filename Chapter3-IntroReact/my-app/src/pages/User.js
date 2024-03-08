import { Outlet, Link } from "react-router-dom";


export default function User() {
	return (
		<>
			<h2>User main page</h2>
            <nav>
                <Link to="/user/info">user info</Link> | 
                <Link to="/user/profile">profile</Link>
            </nav>
            <Outlet />
		</>
	);
}
