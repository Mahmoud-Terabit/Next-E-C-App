"use client"

import React from 'react'
import homeSlider from "../../../../public/homeSlider.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

export default function MainSlider() {
  return (
    <>
      <div className=''>
        <div className='w-full bg-green-500' >
          {/* <Image className='w-full h-100 object-cover' src={homeSlider} alt="" /> */}
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
            autoplay={{ delay: 10000 }}
          >
            <SwiperSlide>
              <div className="relative w-full h-100">
                <Image className='w-full h-full object-cover' src={homeSlider} alt="Slide 1" />
                <div className="absolute inset-0 bg-green-950/50 flex flex-col items-start justify-center text-white text-left p-10 md:p-20">
                  <p className="max-w-2xl text-4xl md:text-6xl font-bold mb-4">Fresh Products Delivered to your Door</p>
                  <p className="text-xl md:text-2xl">Get 20% off your first order</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-100">
                <Image className='w-full h-full object-cover' src={homeSlider} alt="Slide 2" />
                <div className="absolute inset-0 bg-green-950/50 flex flex-col items-start justify-center text-white text-left p-10 md:p-20">
                  <p className="max-w-2xl text-4xl md:text-6xl font-bold mb-4">Premium Quality Guarateed</p>
                  <p className="text-xl md:text-2xl">Fresh from farm to Your table</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-100">
                <Image className='w-full h-full object-cover' src={homeSlider} alt="Slide 3" />
                <div className="absolute inset-0 bg-green-950/50 flex flex-col items-start justify-center text-white text-left p-10 md:p-20">
                  <p className="max-w-2xl text-4xl md:text-6xl font-bold mb-4">Fast & Free Delivery</p>
                  <p className="text-xl md:text-2xl">Same day delivery available</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
