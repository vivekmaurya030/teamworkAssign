import { Routes, HashRouter, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import AboutUs from "./pages/aboutUs";
import LogInPage from "./pages/loginPage";
import { store } from "../src/Redux/index"
import { Provider } from "react-redux";
import SignUpPage from "./pages/signupPage";
import NewAdminPage from "./pages/newadminPage";
import ContactPage from "./pages/contactPage";

import FaqPage from "./pages/faqsPage"
import ProductOrderPage from "./pages/productOrderPage";
import Notification from "./components/notification/notification";
import { Component } from "react";

const Routers = () => {
    return (
        <>
            <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path = "/" element = {<HomePage />}/>
                    <Route path = "/AboutUsPage" element = {<AboutUs />}/>
                    <Route path = "/FAQs" element = { <FaqPage />}> </Route>
                    <Route path="/LogInPage" element={<LogInPage/>}></Route>
                    <Route path="/SignUpPage" element={<SignUpPage />}></Route>
                    <Route path="/NewAdmin" element={<NewAdminPage />}></Route>
                    <Route path="/ContactPage" element={<ContactPage />}></Route>
                    <Route path="/ProductOrderPage" element={<ProductOrderPage />}></Route>
                    <Route exact path="/notification" element={<NewAdminPage/>}>
                    </Route>

                </Routes>
            </HashRouter>
            </Provider>
        </>
    )
}

export default Routers;