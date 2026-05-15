import messages from '../../../pages/home/messages';
import { publicRoutePath, withPublicPrefix } from '../../../utils/publicPath';

export const HERO_SLIDE_INTERVAL_MS = 6000;

export const HOME_HERO_SLIDES = [
  {
    id: 'slide-1',
    imageSrc: withPublicPrefix('/assets/hero-slide-1-xJEgKBTA.jpg'),
    titleMessage: messages.heroSlide1Title,
    descriptionMessage: messages.heroSlide1Description,
    ctaMessage: messages.heroSlide1Cta,
    ctaTo: publicRoutePath('request-to-join'),
  },
  {
    id: 'slide-2',
    imageSrc: withPublicPrefix('/assets/hero-slide-2-D2s01ZEN.jpg'),
    titleMessage: messages.heroSlide2Title,
    descriptionMessage: messages.heroSlide2Description,
    ctaMessage: messages.heroSlide2Cta,
    ctaTo: `${publicRoutePath()}#about`,
  },
  {
    id: 'slide-3',
    imageSrc: withPublicPrefix('/assets/hero-slide-3-BPA7l3mr.jpg'),
    titleMessage: messages.heroSlide3Title,
    descriptionMessage: messages.heroSlide3Description,
    ctaMessage: messages.heroSlide3Cta,
    ctaTo: publicRoutePath('request-to-join'),
  },
];
