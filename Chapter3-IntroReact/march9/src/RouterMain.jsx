import { BrowserRouter, Routes, Route, Link,NavLink } from "react-router-dom";

import Router_Home from "./example/pages/Home";
import Router_User,{UserInfo,UserProfile} from "./example/pages/User";
import Blogspage from "./example/pages/Blogs";
import Blogpage from "./example/pages/Blog";
import NotFound from "./example/pages/404";

export default function mainRoot() {
    return (
        <>
            <h1>Routes</h1>
            
            <BrowserRouter>
                <nav>
                    <NavLink to="/home">home</NavLink> |
                    <NavLink to="/user">user</NavLink> | 
                    <NavLink to="/blogs">blogs</NavLink> | 
                    <NavLink to="/blog/1">blog</NavLink> |
                    <NavLink to="/blog/2">blog</NavLink> |
                    <NavLink to="/blog/abc">blog</NavLink> |
                    <NavLink to="/blog/4">blog</NavLink> |
                    <NavLink to="/nan">wrong</NavLink> | 
                </nav>

                <Routes>
                    <Route path="/home" element={<Router_Home />} />
                    <Route path="/user" element={<Router_User />}>
                        <Route path="info" element={<UserInfo/>}/>
                        <Route path="profile" element={<UserProfile/>}/>
                    </Route>

                    <Route path="/blogs" element={<Blogspage />} />    
                    <Route path="/blog/:id" element={<Blogpage />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}