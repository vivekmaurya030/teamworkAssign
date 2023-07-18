import React from "react"
import 'react-slideshow-image/dist/styles.css'
import {Fade,Zoom, Slide} from 'react-slideshow-image'
import SearchIcon from '@mui/icons-material/Search';


const slideImages = [
  {url: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', title:'img1'},
  {url: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', title:'img2'},
  {url: 'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title:'img3'},
  {url: 'https://images.unsplash.com/photo-1627643515811-ca8f1e968d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title:'img4'},
  {url: 'https://images.unsplash.com/photo-1625314563148-572c6af9e9d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1146&q=80', title:'img5'}
]
const divStyle= {
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:'80vh',
  backgroundSize:'100% 100%'
}

function ImageSlider(){
  return(
    <div className="slide-container">
      <Fade arrows={false} pauseOnHover={false} canSwipe={true} >
        {slideImages.map((image,index) => (
          <div key={index}>
            <div style={{...divStyle,backgroundImage: `linear-gradient(rgb(75, 0, 110,.6),rgba(0,0,0,0.6)),url(${image.url})`}}>
              
            </div>
          </div>
        ))}
      </Fade>
      <div className="searchContainer">
        <div className="searchHead">
          <h1>COME HOME HAPPY!</h1>
        </div>
        {/* <div class="search">
          <input type="text" name="search" id="search" placeholder="Search services, procduct, etc." />
          <button><SearchIcon /></button>
        </div> */}
      </div>
      
    </div>
    
  )
}

export default ImageSlider;