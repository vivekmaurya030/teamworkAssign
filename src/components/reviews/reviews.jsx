import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay, EffectCreative, Zoom } from 'swiper';
import './reviews.scss'

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/autoplay';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-creative'
import 'swiper/scss/zoom'


const Reviews=() => {

  const feedbackData=[
    {userId:"12344",profileImg:"https://ionicframework.com/docs/img/demos/avatar.svg",username:"rajesh Pandey",star:"★★★★★",message:"Outstanding service, meticulous cleaning, and friendly staff. Highly recommend this cleaning company for their exceptional work."},
    {userId:"12344",profileImg:"https://ionicframework.com/docs/img/demos/avatar.svg",username:"Majesh Dutta",star:"★★★★★",message:"Reliable, efficient, affordable, and consistently exceeds expectations. A top-notch cleaning company that's worth every penny!"},
    {userId:"12344",profileImg:"https://ionicframework.com/docs/img/demos/avatar.svg",username:"Saurya Dubey",star:"★★",message:"Impeccable attention to detail, prompt service, and sparkling results every time. A cleaning company I trust and recommend wholeheartedly!"},
    {userId:"12344",profileImg:"https://ionicframework.com/docs/img/demos/avatar.svg",username:"Micheal Jim",star:"★★★★",message:"From start to finish, a seamless experience. They transformed my space, and I'm thrilled with their professionalism and thoroughness."},
    {userId:"12344",username:"rajesh",star:"★★★",message:"The serivce is very good."},
    {userId:"12344",profileImg:"https://ionicframework.com/docs/img/demos/avatar.svg",username:"Bondie Care",star:"★★★★",message:"Hands down the best cleaning company I've ever used! Their team goes above and beyond, leaving my home spotless and refreshed."},
    {userId:"12344",profileImg:"https://ionicframework.com/docs/img/demos/avatar.svg",username:"Calvin Denny",star:"★★★",message:"Effortlessly took care of the messiest areas, leaving my home immaculate. A cleaning company that truly understands and exceeds expectations."}
  ]

  return (
    
    <div className="Reviews">
      <div className="Review-title">
      <h1>Reviews / Feedback</h1>
      </div>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Autoplay, Scrollbar,EffectCreative]}
      spaceBetween={170}
      slidesPerView={2}
      navigation={true}
      slideNextClass='.next'
      slidePrevClass='blur'
      coverflowEffect={
        {rotate: 5,
        stretch: false,
        depth: 500,
        modifier:1,
        scale:.8,
        slideShadows: false}
      }
      pagination={{ clickable: false }}
      effect="coverflow"
      grabCursor={true}
      autoplay={{delay:3000}}
      maxBackfaceHiddenSlides={3}
      centeredSlides={true}
      scrollbar={false}
      loop= {true}
      speed= {1000}
      slideActiveClass='active'
      pauseOnMouseEnter={true}      
      slidesPerGroupAuto={true}
      >
        {feedbackData.map((review)=>(
          <SwiperSlide className='SwiperSlide'>
            <div className='review-card'>
              <div className="review-head">
                <div className="review-head-img">
                  <img src={review?.profileImg} alt="" />
                </div>
                <div className="review-head-detail">
                  <div className="review-username">
                    <h2>{  review?.username.charAt(0).toUpperCase()+review?.username.slice(1)}</h2>
                  </div>
                  <div className="review-star">
                      <h3>{review?.star}</h3>
                  </div>
                </div>
              </div>
              <div className="review-body">
                <p>{review?.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};


export default Reviews;