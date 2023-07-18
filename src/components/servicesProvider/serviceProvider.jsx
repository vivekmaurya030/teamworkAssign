import React, { useState } from "react";
import { ReactDOM } from "react";
import "./serviceProvider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.scss";
import { Pagination,Navigation} from "swiper";


const ServiceProvider = () => {
  const [count, setCount] = useState(0);
  const companyDetail = [
    {
      companyName: "Sprakle Cleaners",
      companyImg:
        "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      companyDetail:
        " When it comes to homes, Sparkle Cleaners takes the responsibility of transforming living spaces into havens of cleanliness. From regular house cleaning to deep cleaning and even move-in or move-out cleaning, their team of skilled professionals ensures that every nook and cranny is attended to with meticulous attention. Whether it's eliminating dust, sanitizing surfaces, or revitalizing carpets and windows, Sparkle Cleaners leaves no stone unturned.",
    },
    {
      companyName: "Fresh & Clear Cleaning Services",
      companyImg:
        "https://images.pexels.com/photos/4767875/pexels-photo-4767875.jpeg?auto=compress&cs=tinysrgb&w=600",
      companyDetail:
        " Fresh & Clear Cleaning Services is a professional cleaning company dedicated to providing exceptional cleaning solutions for residential and commercial clients. With a focus on delivering freshness and clarity, we aim to transform spaces into pristine environments that promote well-being and productivity..",
    },
    {
      companyName: "Nick Green",
      companyImg:
        "https://images.pexels.com/photos/273214/pexels-photo-273214.jpeg?auto=compress&cs=tinysrgb&w=600",
      companyDetail:
        " I highly recommend KLARA for anyone looking for a reliable and professional cleaning service.Nick Green, DeveloperI highly recommend KLARA for anyone looking for a reliable and professional cleaning service",
    },
    {
      companyName: "Clean Works LLC",
      companyImg:
        "https://images.pexels.com/photos/625279/pexels-photo-625279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      companyDetail:
        " I highly recommend KLARA for anyone looking for a reliable and professional cleaning service.Nick Green, DeveloperI highly recommend KLARA for anyone looking for a reliable and professional cleaning service",
    },
    {
      companyName: "Clean Works LLC",
      companyImg:
        "https://images.unsplash.com/photo-1609350885949-522293758436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80",
      companyDetail:
        " I highly recommend KLARA for anyone looking for a reliable and professional cleaning service.Nick Green, DeveloperI highly recommend KLARA for anyone looking for a reliable and professional cleaning serviceI highly recommend KLARA for anyone ng for a reliable and professional cleaning service",
    },
    {
      companyName: "Clean Works LLC",
      companyImg:
        "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      companyDetail:
        " I highly recommend KLARA for anyone looking for a reliable and professional cleaning service.Nick Green, DeveloperI highly recommend KLARA for anyone looking for a reliable and professional cleaning service",
    },
  ];
        
  
  return (
    <div className="Ser-provider">
      <div className="Ser-provider-head">
        <h1>Collabrators</h1>
      </div>
      <Swiper 
        slidesPerView={4}
        autoplay={{delay:1000}}
        loop= {true}
        speed= {1000}
        grabCursor={true}
        spaceBetween={2}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          100:{
            slidesPerView:1,
            spaceBetween:10,
          },
          300:{
            slidesPerView:1,
            spaceBetween:10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
      

        <div className="Ser-provider-cards">
          {companyDetail.map((company) => (
            <SwiperSlide 
            className="Slide"
            o>
              <div className="card">
                <div className="card-img">
                  <img src={company.companyImg} alt="" />
                </div>
                <div className="card-name">
                  <h3>{company.companyName}</h3>
                </div>

              </div>
              <div className="card-detail" style={{background:`url(${company.companyImg})`, backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
                <div className="detail">
                <h3>{company.companyName}</h3>
                <p>{company.companyDetail}</p>
                </div>
              </div>
              
            </SwiperSlide>
          ))}
        </div>
    </Swiper>

      </div>
  );
};

export default ServiceProvider;
