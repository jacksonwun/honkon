import React, { useCallback } from "react";
import Image from "next/image";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import imageByIndex from "./imageByIndex";
import styles from "styles/home/banner/embla.module.scss";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const BannerCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((object, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                <span>{index + 1}</span>
              </div>
              <Image
                className={styles.embla__slide__img}
                src={imageByIndex(index).url}
                alt={imageByIndex(index).alt}
                width={1200}
                height={630}
              />
              <div className={styles.embla__title}>
                {imageByIndex(index).title}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.embla__button}>
          <button className="embla__prev" onClick={scrollPrev}>
            Prev
          </button>
          <button className="embla__next" onClick={scrollNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
