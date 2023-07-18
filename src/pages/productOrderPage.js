import React from "react";
import ProductOrder from "../components/productOrder/productOrder";
import Adminhead from "../components/admin/adminHead";
import { useNavigate } from "react-router";

const ProductOrderPage=()=>{
    const navigate = useNavigate();
    var userDetails = JSON.parse(localStorage.getItem("userDetails"))
    if(!userDetails) {
        window.location = '/#/LogInPage';
         return;
    }
    return (
        <div>
            <Adminhead/>
            <ProductOrder/> 
        </div>
    )
}

export default ProductOrderPage;