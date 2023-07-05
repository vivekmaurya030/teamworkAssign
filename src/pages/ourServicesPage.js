import React from "react";
import Header from "../components/header";
import Footers from "../components/footer/footers";
import OurServices from "../components/ourServices/ourServices";

const OurServicesPage=()=>{
    return(
        <div>
            <Header />
            <OurServices />
            <Footers />
        </div>
    )
}

export default OurServicesPage;