import React from "react"
import 'react-slideshow-image/dist/styles.css'
import {Fade,Zoom, Slide} from 'react-slideshow-image'
import { Link } from "react-router-dom"


const slideImages = [
  {url: 'https://images.unsplash.com/photo-1681418658063-d9c9ec0d637d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80', title:'img1'},
  {url: 'https://images.unsplash.com/photo-1680530033206-881e0a7e44b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title:'img2'},
  {url: 'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title:'img3'},
  {url: 'https://images.unsplash.com/photo-1627643515811-ca8f1e968d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title:'img4'},
  {url: 'https://images.unsplash.com/photo-1625314563148-572c6af9e9d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1146&q=80', title:'img5'}
]
const divStyle= {
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:'30vh',
  backgroundSize:'100% 100%'
}

function ProductImageSlider(){
  return(
    <div className="product-slide-container">
      <Zoom pauseOnHover={false} canSwipe={false} duration={3500} transitionDuration={1000} arrows={false} >
        {slideImages.map((image,index) => (
          <div key={index}>
            <div style={{...divStyle,backgroundImage:`linear-gradient(135deg,#4b006e,#4b006e,rgb(75, 0, 110,.70),rgb(255,255,255,.2)), url(${image.url})`}}>
              
            </div>
          </div>
        ))}
      </Zoom>
      <div className="product-image-slider-head">
        <h1>Try our <br />Services!</h1>
        <Link to='/ProductOrderPage'><button className="justTry-btn">Just Try...</button></Link>
      </div>
      
    </div>
    
  )
}

export default ProductImageSlider;