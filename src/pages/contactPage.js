import React from "react";
import Contact from "../components/contact/contact";
import Adminhead from "../components/admin/adminHead";

const ContactPage=()=>{
    return(
        <div>
            <Adminhead title="Web Manager"/>
            <Contact />
        </div>
    )
}
export default ContactPage;