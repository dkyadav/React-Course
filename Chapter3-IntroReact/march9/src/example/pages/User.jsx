import {Link, Outlet} from "react-router-dom";
export default function Router_User() {
    return (
        <>
            <h1>User page</h1>

            <nav>
                <Link to="/user/info">user-info</Link> | 
                <Link to="/user/profile">user-profile</Link> | 
            </nav>
            <Outlet/>
        </>
    )
}

export function UserInfo(){
    return(
        <h3>Userpinfo page</h3>
    )
}

export function UserProfile(){
    return(
        <h3>userProfile page</h3>
    )
}