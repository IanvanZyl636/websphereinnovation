'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ReactNode} from "react";

export type carouselProps = {
    items:{node:ReactNode}[]
}
export default function InfiniteCarousel({items}:carouselProps) {

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {items.map((item, index) => (<SwiperSlide key={index}>{item.node}</SwiperSlide>))}
            </Swiper>
        </>
    )
}
