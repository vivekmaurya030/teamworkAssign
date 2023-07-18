import React, { useEffect } from "react";
import './ourServices.scss'
import { Link } from "react-router-dom";

const OurServices =()=>{
    useEffect(()=>{
        window.scrollTo({top:"0",behavior:"smooth"})},[])

    const ServicesData=[
        {img:"https://images.pexels.com/photos/5245961/pexels-photo-5245961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Regular Cleaning",info:" Regular cleaning services are usually provided on a weekly, bi-weekly, or monthly basis. This includes general cleaning tasks to maintain the cleanliness and tidiness of the home. It typically involves dusting, vacuuming, mopping floors, cleaning surfaces, and removing cobwebs."},
        {img:"https://images.pexels.com/photos/6195198/pexels-photo-6195198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Kitchen Cleaning",info:"This service concentrates on thorough cleaning of the kitchen area. It involves cleaning and sanitizing countertops, sinks, stovetops, ovens, microwaves, refrigerators, and other kitchen appliances. The cleaning agency may also clean the interior and exterior of kitchen cabinets and polish stainless steel surfaces."},
        {img:"https://images.pexels.com/photos/5591580/pexels-photo-5591580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Bathroom Cleaning",info:"Bathroom cleaning services target the thorough cleaning and disinfection of bathrooms. The cleaners will sanitize toilets, sinks, bathtubs, showers, mirrors, and tiles. They will also clean and disinfect bathroom fixtures, remove soap scum, and eliminate mold and mildew."},
        {img:"https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg",title:"Deep Cleaning",info:" Deep cleaning services involve a more thorough and detailed cleaning of the entire home. It covers hard-to-reach areas and focuses on eliminating accumulated dirt, grime, and dust. Deep cleaning may include cleaning and sanitizing kitchen appliances, scrubbing bathroom tiles, wiping down baseboards, and cleaning interior windows."},
        {img:"https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Carpet and Upholstery Cleaning",info:"Professional cleaning agencies often provide carpet and upholstery cleaning services. They use specialized equipment and cleaning solutions to deep clean carpets, rugs, and upholstery, removing stains, dirt, and allergens. This service can help rejuvenate and extend the lifespan of carpets and upholstery."},
    ]

    return(
        <div className="ourServices">
            <div className="ser-head" style={{background:"linear-gradient(rgb(75, 0, 110,.8),rgba(0,0,0,0.8)),url(https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <h1>Our Services</h1>
            <p>
                KLARA MOON is a versatile agency that offers home cleaning services typically provides a range of comprehensive and professional cleaning solutions to meet the needs and preferences of their clients. Here is a detailed description of the services typically offered by KLARA
            </p>
            </div>
            {ServicesData.map((item)=>(
                <div className="service" style={{background:`linear-gradient(rgb(75, 0, 110,.6),rgba(0,0,0,0.6)),url(${item.img})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
                    <div className="ser-text">
                        <h1>{item.title}</h1>
                        <p>{item.info}</p>
                        <Link to="/ProductOrderPage"><button className="book-btn">Book Now</button></Link>
                    </div>
                    <div className="ser-img">
                        <img src={item.img} alt={item.title} />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default OurServices;