"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/assets/images/homeCarousel/1.jpg",
    title: "Affordable Price For Car Servicing",
    text: "Quality car care from trusted technicians at a price you can afford.",
  },
  {
    image: "/assets/images/homeCarousel/2.jpg",
    title: "Keep Your Car Running Smoothly",
    text: "Give your car the expert care it needs with our reliable services.",
  },
  {
    image: "/assets/images/homeCarousel/3.jpg",
    title: "Professional Care For Every Car",
    text: "Modern tools and experienced technicians for dependable results.",
  },
  {
    image: "/assets/images/homeCarousel/4.jpg",
    title: "Your Trusted Car Doctor",
    text: "Book a service today and drive with confidence tomorrow.",
  },
];

const Banner = () => {
  return (
    <section className="px-4 pb-8 pt-2 md:pb-12 md:pt-3 max-w-[1920px] mx-auto">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="banner-swiper overflow-hidden rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="relative h-[620px] overflow-hidden rounded-lg md:h-[760px]">
              {/* Show the background image for this slide. */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.image === slides[0].image}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />

              {/* Add a dark layer so the text stays easy to read. */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Show the slide message and action button. */}
              <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center px-7 text-white md:px-16">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                  Car Doctor
                </p>
                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-lg text-sm leading-6 text-slate-200 md:text-base">
                  {slide.text}
                </p>
                <div className="mt-7">
                  <Link
                    href="#services"
                    className="btn border-0 bg-red-500 px-7 text-white hover:bg-red-600"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;