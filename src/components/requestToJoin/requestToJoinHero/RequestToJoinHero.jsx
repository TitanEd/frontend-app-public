import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/requestToJoin/messages';
import './RequestToJoinHero.scss';

const RequestToJoinHero = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="request-join-hero gradient-hero" aria-labelledby="request-join-hero-title">
      <div className="request-join-hero__orb request-join-hero__orb--accent animate-float" aria-hidden="true" />
      <div className="request-join-hero__orb request-join-hero__orb--highlight animate-float" aria-hidden="true" />
      <div className="request-join-hero__container">
        <div className="request-join-hero__icon-wrap" aria-hidden="true">
          <FontAwesomeIcon icon={faUserPlus} className="request-join-hero__icon" />
        </div>
        <h1 id="request-join-hero-title" className="request-join-hero__title">
          {formatMessage(messages.heroTitle)}
        </h1>
        <p className="request-join-hero__description">
          {formatMessage(messages.heroDescription)}
        </p>
      </div>
    </section>
  );
};

export default RequestToJoinHero;
