import Image from "next/image";
import css from "./Banner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface BannerProps {
  data: any[];
}

export default function Banner({ data }: BannerProps) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={14}
      slidesPerGroup={1}
      slidesPerView={1}
      breakpoints={{
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        425: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      }}
    >
      {data.map(({ url, alt, imgSrc, text }, index) => {
        return (
          <SwiperSlide key={`announce_${index}`}>
            <div className={css.item}>
              <div className={css.imgBox}>
                <a href={url} target="_blank">
                  <Image
                    alt={alt}
                    src={imgSrc}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </div>
              <p className={css.textOneLine}>{text}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
