/* eslint-disable react/prop-types */
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/about/messages';
import './AboutHero.scss';

const AboutHero = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="about-hero gradient-hero" aria-labelledby="about-hero-title">
      <div className="about-hero__orb about-hero__orb--one animate-float" aria-hidden="true" />
      <div className="about-hero__orb about-hero__orb--two animate-float" aria-hidden="true" />

      <div className="about-hero__container">
        <span className="about-hero__badge">{formatMessage(messages.heroBadge)}</span>
        <h1 id="about-hero-title" className="about-hero__title">
          {formatMessage(messages.heroTitlePrefix)}
          {' '}
          <span className="about-hero__title-highlight">
            {formatMessage(messages.heroTitleHighlight)}
          </span>
        </h1>
        <p className="about-hero__description">
          {formatMessage(messages.heroDescription)}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
