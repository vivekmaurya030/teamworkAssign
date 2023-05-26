import { Routes, HashRouter, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import AboutUs from "./pages/aboutUs";
import LogInPage from "./pages/loginPage";


const Routers = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path = "/" element = {<HomePage />}/>
                    <Route path = "/AboutUsPage" element = {<AboutUs />}/>
                    <Route path="/LogInPage" element={<LogInPage/>}></Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default Routers;