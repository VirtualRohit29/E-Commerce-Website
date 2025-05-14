import React from 'react'

import list from "../../src/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';






function Freebook  ()  {
     const filterdata=list.filter((data)=>data.price==="00");
     var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <h1 className='font-semibold text-2xl pb-2'>Free Offered Boooks</h1>
        <p>A heartwarming tale of love, loss, and finding your way back.
        Perfect for fans of emotionally rich storytelling.An edge-of-your-seat thriller that keeps you guessing.
        Fast-paced, gripping, and impossible to put down.A fun and adventurous read for young explorers.
        Packed with imagination and heart.</p>
    </div>
    <div>
    <Slider {...settings}>
       {filterdata.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </>
  )
}

export default Freebook