import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const VideoSliderData = ({ videos, title, id }) => {
  // console.log("VideoSlider", videos);
  // 로딩효과
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 0.5초
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const CalmdownmanClass = loading ? "isLoading" : "isLoaded";

  return (
    <section id={id} className={CalmdownmanClass}>
      <h2>{title}</h2>

      <div className="video__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper-${id}`}
          // 슬라이더 반응형
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {videos.map((video, key) => (
            <SwiperSlide key={key}>
              <div className="video" key={key}>
                <div className="video__thumb play__icon">
                  <Link to={`/video/${video.id.videoId}`}>
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSliderData;
