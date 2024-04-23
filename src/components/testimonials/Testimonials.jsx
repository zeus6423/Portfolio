import React from 'react'
import '../testimonials/Testimonials.css'
import avt1 from "../../assets/avatar1.jpg"
import avt2 from "../../assets/avatar2.jpg"
import avt3 from "../../assets/avatar3.jpg"
import avt4 from "../../assets/avatar4.jpg"

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Review for clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
      modules={[ Pagination]}
      spaceBetween="10rem"
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonials__container"
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">

            <img src={avt1} alt="First Avatar"/>
          </div>
            <h5 className="client__name">Rahul Patil</h5>
            <small className="client__review">
                My clients 
            </small>

          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            
            <img src={avt2} alt="First Avatar"/>
          </div>
            <h5 className="client__name">Girish Patil</h5>
            <small className="client__review">
                My Clients
            </small>

          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt3} alt="First Avatar"/>
          </div>
            <h5 className="client__name">Pratik Patil</h5>
            <small className="client__review">
              My Clients
            </small>

          
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
