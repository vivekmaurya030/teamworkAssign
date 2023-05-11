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
    {userId:"12344",profileImg:"https://images.unsplash.com/photo-1550935114-99de2f488f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",username:"rajesh",star:"★★★★★",message:"I highly recommend KLARA for anyone looking for a reliable and professional cleaning service.I highly recommend KLARA for anyone looking for a reliable and professional cleaning service.I highly recommend KLARA for anyone looking for a reliable and professional cleaning service."},
    {userId:"12344",profileImg:"https://images.unsplash.com/photo-1550935114-99de2f488f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",username:"rajesh",star:"★★★★★",message:"The serivce is very good."},
    {userId:"12344",profileImg:"https://images.unsplash.com/photo-1550935114-99de2f488f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",username:"rajesh",star:"★★",message:"The serivce is very good."},
    {userId:"12344",profileImg:"https://images.unsplash.com/photo-1550935114-99de2f488f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",username:"rajesh",star:"★★★★",message:"The serivce is very good."},
    {userId:"12344",username:"rajesh",star:"★★★",message:"The serivce is very good."},
    {userId:"12344",profileImg:"https://images.unsplash.com/photo-1550935114-99de2f488f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",username:"rajesh",star:"★★★★",message:"The serivce is very good."},
    {userId:"12344",username:"rajesh",star:"★★★",message:"The serivce is very good."}
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
      pagination={{ clickable: true }}
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
                  <img src={review.profileImg ? review.profileImg:"https://images.unsplash.com/photo-1630568321790-65edcc51b544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}  alt="" />
                </div>
                <div className="review-head-detail">
                  <div className="review-username">
                    <h2>{  review.username.toUpperCase()}</h2>
                  </div>
                  <div className="review-star">
                      <h3>{review.star}</h3>
                  </div>
                </div>
              </div>
              <div className="review-body">
                <p>{review.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};


export default Reviews;