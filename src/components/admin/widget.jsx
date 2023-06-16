import React from "react";
import './widget.scss'


const Widget=(prop)=>{

    return(
        <div className="widget-main" style={{background:`URL(${prop.bg})`, height:"25vh",width:"100%", backgroundSize:"100% 100%", backgroundPosition:"0 0", backgroundRepeat:'no-repeat'}}>
           <div className="head"><h3>{prop.head}</h3></div>
           <div className="widget-boxes">
            <div className="widget-box">
                <div>{prop.icon1}</div>
                <div><h5>{prop.icon1Title}</h5></div>
            </div>
            <div className="widget-box">
                <div>{prop.icon2}</div>
                <div><h5>{prop.icon2Title}</h5></div>
            </div>
           </div>
        </div>

    )
}

export default Widget;