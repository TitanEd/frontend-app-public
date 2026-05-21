/* eslint-disable react/prop-types */
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  useCallback, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';

import messages from '../../../pages/home/messages';
import HighlightButton from '../highlightButton/HighlightButton';
import { HERO_SLIDE_INTERVAL_MS, HOME_HERO_SLIDES } from './homeHeroSlides';
import './HomeHero.scss';

const HomeHero = () => {
  const { formatMessage } = useIntl();
  const [current, setCurrent] = useState(0);
  const slideCount = HOME_HERO_SLIDES.length;

  const goTo = useCallback((index) => {
    setCurrent((index + slideCount) % slideCount);
  }, [slideCount]);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((c) => (c + 1) % slideCount);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [slideCount]);

  const activeSlide = HOME_HERO_SLIDES[current];

  return (
    <section className="home-hero" aria-roledescription="carousel" aria-label={formatMessage(activeSlide.titleMessage)}>
      {HOME_HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`home-hero__slide${index === current ? ' home-hero__slide--active' : ''}`}
          aria-hidden={index !== current}
        >
          <img
            className="home-hero__slide-image"
            src={slide.imageSrc}
            alt={formatMessage(slide.titleMessage)}
            width={1920}
            height={1080}
          />
          <div className="home-hero__slide-overlay" aria-hidden="true" />
        </div>
      ))}

      <div className="home-hero__content">
        <div className="home-hero__content-inner">
          {HOME_HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`home-hero__copy${index === current ? ' home-hero__copy--active' : ''}`}
              aria-hidden={index !== current}
            >
              {index === current ? (
                <>
                  <h1 className="home-hero__title">
                    {formatMessage(slide.titleMessage)}
                  </h1>
                  <p className="home-hero__description">
                    {formatMessage(slide.descriptionMessage)}
                  </p>
                  <HighlightButton
                    as={Link}
                    to={slide.ctaTo}
                    showArrow
                  >
                    {formatMessage(slide.ctaMessage)}
                  </HighlightButton>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="home-hero__nav home-hero__nav--prev"
        aria-label={formatMessage(messages.heroPrevSlide)}
        onClick={prev}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="home-hero__nav-icon" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="home-hero__nav home-hero__nav--next"
        aria-label={formatMessage(messages.heroNextSlide)}
        onClick={next}
      >
        <FontAwesomeIcon icon={faChevronRight} className="home-hero__nav-icon" aria-hidden="true" />
      </button>

      <div className="home-hero__dots" role="tablist">
        {HOME_HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-label={formatMessage(messages.heroGoToSlide, { slideNumber: index + 1 })}
            className={`home-hero__dot${index === current ? ' home-hero__dot--active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
