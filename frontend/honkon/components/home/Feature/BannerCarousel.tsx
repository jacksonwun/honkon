import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import styles from "styles/home/banner/embla.module.scss";
import ArticleAPI from "../../../lib/api/article";
import { SERVER_BASE_URL } from "../../../lib/utils/constant";
import { fetcher } from "../../../lib/utils/fetcher";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  getInitialProps: any;
};

const BannerCarousel: any = (initialList: any) => {
  const router = useRouter();
  const { slides, options } = initialList;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const locale = router.locale as string;

  const { data: fetchedList, error: error } = useSWR(
    `${SERVER_BASE_URL}/${locale}/articles/featureslide/`,
    fetcher
  );
  const data: any = fetchedList || initialList;

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
          {slides.map((object: any, index: number) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                <span>{index + 1}</span>
              </div>
              <Image
                className={styles.embla__slide__img}
                src={data.results ? data.results[index].pic : ""}
                alt={data.results ? data.results[index].category_slug : ""}
                width={1200}
                height={630}
                unoptimized={true}
              />
              <div className={styles.embla__text__container}>
                <div className={styles.embla__title}>
                  {data.results && data.results[index].title}
                </div>
                <div className={styles.embla__caption}>
                  {data.results && data.results[index].caption}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.embla__button}>
          <button className="embla__prev" onClick={scrollPrev}>
            {`<`}
          </button>
          <button className="embla__next" onClick={scrollNext}>
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};

BannerCarousel.getInitialProps = async ({ locale }: any) => {
  const { data } = await ArticleAPI.getFeatureSlide(locale);
  return data;
};

export default BannerCarousel;
