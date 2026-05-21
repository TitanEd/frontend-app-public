import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/privacyPolicy/messages';
import './PrivacyPolicyHero.scss';

const PrivacyPolicyHero = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="privacy-policy-hero gradient-hero" aria-labelledby="privacy-policy-hero-title">
      <div className="privacy-policy-hero__orb animate-float" aria-hidden="true" />
      <div className="privacy-policy-hero__container">
        <div className="privacy-policy-hero__icon-wrap" aria-hidden="true">
          <FontAwesomeIcon icon={faShieldAlt} className="privacy-policy-hero__icon" />
        </div>
        <h1 id="privacy-policy-hero-title" className="privacy-policy-hero__title">
          {formatMessage(messages.heroTitle)}
        </h1>
        <p className="privacy-policy-hero__updated">
          {formatMessage(messages.heroLastUpdated)}
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyHero;
