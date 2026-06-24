import messages from '../../../pages/home/messages';
import heroSlide1 from '../../../images/hero-slide-1-xJEgKBTA.jpg';
import heroSlide2 from '../../../images/hero-slide-2-D2s01ZEN.jpg';
import heroSlide3 from '../../../images/hero-slide-3-BPA7l3mr.jpg';
import { publicRoutePath } from '../../../utils/publicPath';

export const HERO_SLIDE_INTERVAL_MS = 6000;

export const HOME_HERO_SLIDES = [
  {
    id: 'slide-1',
    imageSrc: heroSlide1,
    titleMessage: messages.heroSlide1Title,
    descriptionMessage: messages.heroSlide1Description,
    ctaMessage: messages.heroSlide1Cta,
    ctaTo: publicRoutePath('request-to-join'),
  },
  {
    id: 'slide-2',
    imageSrc: heroSlide2,
    titleMessage: messages.heroSlide2Title,
    descriptionMessage: messages.heroSlide2Description,
    ctaMessage: messages.heroSlide2Cta,
    ctaTo: publicRoutePath('request-to-join'),
  },
  {
    id: 'slide-3',
    imageSrc: heroSlide3,
    titleMessage: messages.heroSlide3Title,
    descriptionMessage: messages.heroSlide3Description,
    ctaMessage: messages.heroSlide3Cta,
    ctaTo: publicRoutePath('request-to-join'),
  },
];
