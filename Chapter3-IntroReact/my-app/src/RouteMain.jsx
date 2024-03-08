import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contactus";
import NoPage from "./pages/NoPage";

import UserProfile from "./pages/UserProfile";
import UserInfo from "./pages/UserInfo";
import User from "./pages/User";

function RootElem() {
    return (
        <h1>Router main page</h1>
    )
}

function RouteM() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="user" element={<User />} />
                    <Route path="contact/:id" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="user/" element={<User />}>
                    {/* <Route path="user/">
                        <Route index element={<User />} /> */}
                        <Route path="info" element={<UserInfo />} />
                        <Route path="profile" element={<UserProfile />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default RouteM;