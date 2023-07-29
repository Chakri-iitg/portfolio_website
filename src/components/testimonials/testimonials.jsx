import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
 {
  avatar: AVTR1,
  name: 'Tina snow',
  review: 'Modi alias animi dolrem aliquan ea eum beatae mairoes,consectetuar praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestine. Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasio?'
 },
 {
  avatar: AVTR2,
  name: 'Shatta Wale',
  review: 'Modi alias animi dolrem aliquan ea eum beatae mairoes,consectetuar praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestine. Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasio?'
 },
 {
  avatar: AVTR3,
  name: 'Kwame Despite',
  review: 'Modi alias animi dolrem aliquan ea eum beatae mairoes,consectetuar praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestine. Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasio?'
 },
 {
  avatar: AVTR4,
  name: 'Nana Ama McBrown',
  review: 'Modi alias animi dolrem aliquan ea eum beatae mairoes,consectetuar praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestine. Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasio?'
 },






]










const testimonials = () => {
  return (
    <section id='testimonials'>
         <h5>Review from clients</h5>
         <h2>Testimonials</h2>
        
         <Swiper className="container testimonials__container"
         modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
   
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
           {
             data.map(({avatar,name,review},index) =>{
              
              return (
                    <SwiperSlide key={index} className="testimonial">
                     <div className="client__avatar">
                          <img src={avatar} />
                     </div>
                     <h5 className='client__name'>{name}</h5>
                     <small className='client__review'>{review}</small>
                    </SwiperSlide>
              )
             })
           }  
         </Swiper>
    </section>
  )
}

export default testimonials