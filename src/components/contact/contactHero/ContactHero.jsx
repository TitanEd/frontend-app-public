import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/contact/messages';
import './ContactHero.scss';

const ContactHero = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="contact-hero gradient-hero" aria-labelledby="contact-hero-title">
      <div className="contact-hero__orb animate-float" aria-hidden="true" />
      <div className="contact-hero__container">
        <span className="contact-hero__badge">{formatMessage(messages.heroBadge)}</span>
        <h1 id="contact-hero-title" className="contact-hero__title">
          {formatMessage(messages.heroTitle)}
        </h1>
        <p className="contact-hero__description">
          {formatMessage(messages.heroDescription)}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
