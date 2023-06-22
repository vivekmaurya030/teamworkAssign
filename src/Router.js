import { Routes, HashRouter, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import AboutUs from "./pages/aboutUs";
import LogInPage from "./pages/loginPage";
import { store } from "../src/Redux/index"
import { Provider } from "react-redux";
import SignUpPage from "./pages/signupPage";
import NewAdminPage from "./pages/newadminPage";
import FaqPage from "./pages/faqsPage"

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

                </Routes>
            </HashRouter>
            </Provider>
        </>
    )
}

export default Routers;