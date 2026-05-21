import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/termsOfService/messages';
import './TermsOfServiceHero.scss';

const TermsOfServiceHero = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="terms-of-service-hero gradient-hero" aria-labelledby="terms-of-service-hero-title">
      <div className="terms-of-service-hero__orb animate-float" aria-hidden="true" />
      <div className="terms-of-service-hero__container">
        <div className="terms-of-service-hero__icon-wrap" aria-hidden="true">
          <FontAwesomeIcon icon={faFileAlt} className="terms-of-service-hero__icon" />
        </div>
        <h1 id="terms-of-service-hero-title" className="terms-of-service-hero__title">
          {formatMessage(messages.heroTitle)}
        </h1>
        <p className="terms-of-service-hero__updated">
          {formatMessage(messages.heroLastUpdated)}
        </p>
      </div>
    </section>
  );
};

export default TermsOfServiceHero;
