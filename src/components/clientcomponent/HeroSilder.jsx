"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { sliderData } from "@/data/SilderData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSilder = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full h-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                sizes="(max-w-7xl) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-left text-white z-10 flex flex-col space-y-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl drop-shadow-sm line-clamp-2">
                {slide.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSilder;
