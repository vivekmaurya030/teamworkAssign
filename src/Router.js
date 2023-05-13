import { Routes, HashRouter, Route } from "react-router-dom";
import HomePage from './pages/homePage';


const Routers = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path = "/" element = {<HomePage />}/>
                </Routes>
            </HashRouter>
        </>
    )
}

export default Routers;