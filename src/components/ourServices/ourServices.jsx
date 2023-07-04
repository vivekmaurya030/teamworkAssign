import React from "react";
import './ourServices.scss'
import bgimg from './image/bgimg.jpg';

const OurServices =()=>{
    const ServicesData=[
        {img:"https://images.pexels.com/photos/5245961/pexels-photo-5245961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Regular Cleaning",info:" Regular cleaning services are usually provided on a weekly, bi-weekly, or monthly basis. This includes general cleaning tasks to maintain the cleanliness and tidiness of the home. It typically involves dusting, vacuuming, mopping floors, cleaning surfaces, and removing cobwebs."},
        {img:"https://images.pexels.com/photos/6195198/pexels-photo-6195198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Kitchen Cleaning",info:"This service concentrates on thorough cleaning of the kitchen area. It involves cleaning and sanitizing countertops, sinks, stovetops, ovens, microwaves, refrigerators, and other kitchen appliances. The cleaning agency may also clean the interior and exterior of kitchen cabinets and polish stainless steel surfaces."},
        {img:"https://images.pexels.com/photos/5591580/pexels-photo-5591580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Bathroom Cleaning",info:"Bathroom cleaning services target the thorough cleaning and disinfection of bathrooms. The cleaners will sanitize toilets, sinks, bathtubs, showers, mirrors, and tiles. They will also clean and disinfect bathroom fixtures, remove soap scum, and eliminate mold and mildew."},
        {img:"https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg",title:"Deep Cleaning",info:" Deep cleaning services involve a more thorough and detailed cleaning of the entire home. It covers hard-to-reach areas and focuses on eliminating accumulated dirt, grime, and dust. Deep cleaning may include cleaning and sanitizing kitchen appliances, scrubbing bathroom tiles, wiping down baseboards, and cleaning interior windows."},
        {img:"https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Carpet and Upholstery Cleaning",info:"Professional cleaning agencies often provide carpet and upholstery cleaning services. They use specialized equipment and cleaning solutions to deep clean carpets, rugs, and upholstery, removing stains, dirt, and allergens. This service can help rejuvenate and extend the lifespan of carpets and upholstery."},
    ]

    return(
        <div>
        <div class="nav-ser">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div class="header-ser" style={{background:`url(${bgimg})`}}>
            <h1>Our Services</h1>
            <p>
                KLARA MOON is a versatile agency that offers home cleaning services typically provides a range of comprehensive and professional cleaning solutions to meet the needs and preferences of their clients. Here is a detailed description of the services typically offered by KLARA
            </p>
        </div>
        <div class="service">
            <div class="service1">
                <div class="content">
                    <h3>Bathroom Cleaning</h3>
                    <p>
                        Bathroom cleaning services target the thorough cleaning and disinfection of bathrooms. The cleaners will sanitize toilets, sinks, bathtubs, showers, mirrors, and tiles. They will also clean and disinfect bathroom fixtures, remove soap scum, and eliminate mold and mildew.
                    </p>
                    <button>Book Now</button>
                </div>
                <div class="image">
                    <img src="image/pexels-rdne-stock-project-5591580.jpg" alt="" />
                </div>
            </div>
            <div class="service2">
                <div class="content">
                    <h3>Regular Cleaning</h3>
                    <p>
                        Regular cleaning services are usually provided on a weekly, bi-weekly, or monthly basis. This includes general cleaning tasks to maintain the cleanliness and tidiness of the home. It typically involves dusting, vacuuming, mopping floors, clean218ing surfaces, 
                        and removing cobwebs.
                    </p>
                    <button>Book Now</button>
                </div>
                <div class="image">
                    <img src="image/pexels-tima-miroshnichenko-6195288.jpg" alt="" />
                </div>
            </div>
            <div class="service3">
                <div class="content">
                    <h3>Kitchen Cleaning</h3>
                    <p>
                        This service concentrates on thorough cleaning of the kitchen area. it involves cleaning and sanitizing countertops, sinks, stovetops, ovens, microwaves, refrigerators, and other kitchen appliances.The cleaning agency may also clean the interior and exterior of kitchen cabinets and polish stainless steel surfaces.
                    </p>
                    <button>Book Now</button>
                </div>
                <div class="image">
                    <img src="image/pexels-tima-miroshnichenko-6195198.jpg" alt="" />
                </div>
            </div>
            <div class="service4">
                <div class="content">
                    <h3>Carpet and Uphoistery Cleaning</h3>
                    <p>
                        Professional cleaning agencies often provide carpet and upholstery cleaning services. They use specialized equipment and cleaning solutions to deep clean carpets, rugs, and upholstery, removing stains, dirt, and allergens. This service can help rejuvenate and extend the lifespan of carpets and upholstery.
                    </p>
                    <button>Book Now</button>
                </div>
                <div class="image">
                    <img src="image/pexels-cottonbro-studio-4107284.jpg" alt="" />
                </div>
            </div>
            <div class="service5">
                <div class="content">
                    <h3>Deep Cleaning</h3>
                    <p>
                        Deep cleaning services involve a more thorough and detailed cleaning of the entire home. It covers hard-to-reach areas and focuses on eliminating accumulated dirt, grime, and dust. Deep cleaning may include cleaning and sanitizing kitchen appliances, scrubbing bathroom tiles, wiping down baseboards, and cleaning interior windows.
                    </p>
                    <button>Book Now</button>
                </div>
                <div class="image">
                    <img src="image/pexels-karolina-grabowska-4239145.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default OurServices;