"use client";
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Image } from 'antd';

function CommonCarousel({data,width,height}:any) {
  return (
    <Carousel
    autoPlay
    infiniteLoop
    showArrows={true}
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={3000}
    stopOnHover={false}
  >
    {data?.map((item: any, i: number) => (
      <div
        key={i}
        style={{ display: "flex"}}
      >
        {item?.list?.map((value: any, index: number) => (
          <div
            key={index}
            style={{ width: "100%",cursor:'pointer' }}
          >
            <Image
              src={value}
              width={width}
              height={height}
              style={{ width: "92%", height:'100%', borderRadius: 12 }}
            />
          </div>
        ))}
      </div>
    ))}
  </Carousel>
  )
}

export default CommonCarousel