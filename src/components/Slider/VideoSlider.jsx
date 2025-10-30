"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";

export default function VideoSlider() {
  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/9bZkp7q19f0",
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-500 mb-10">
          Our <span className="text-white">Featured</span> Videos
        </h2>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="relative group">
              <motion.div
                initial={{ boxShadow: "0 0 0px #00e5ff00" }}
                animate={{ boxShadow: [
                  "0 0 20px 0 #00e5ff55",
                  "0 0 35px 2px #00e5ff88",
                  "0 0 24px 0 #00e5ff55"
                ] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-60 bg-gray-900 rounded-lg overflow-hidden shadow-lg border-2 border-white"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`${video}?controls=0`} // Hides controls for a cleaner look
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
