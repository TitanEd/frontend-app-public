import { faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable react/prop-types */
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/faqs/messages';
import './FaqsHero.scss';

const FaqsHero = ({ query, onQueryChange }) => {
  const { formatMessage } = useIntl();

  return (
    <section className="faqs-hero gradient-hero" aria-labelledby="faqs-hero-title">
      <div className="faqs-hero__orb faqs-hero__orb--accent animate-float" aria-hidden="true" />
      <div className="faqs-hero__orb faqs-hero__orb--highlight animate-float" aria-hidden="true" />
      <div className="faqs-hero__container">
        <div className="faqs-hero__icon-wrap" aria-hidden="true">
          <FontAwesomeIcon icon={faQuestionCircle} className="faqs-hero__icon" />
        </div>
        <h1 id="faqs-hero-title" className="faqs-hero__title">
          {formatMessage(messages.heroTitle)}
        </h1>
        <p className="faqs-hero__description">
          {formatMessage(messages.heroDescription)}
        </p>
        <div className="faqs-hero__search-wrap">
          <FontAwesomeIcon icon={faSearch} className="faqs-hero__search-icon" aria-hidden="true" />
          <input
            type="search"
            className="faqs-hero__search-input"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={formatMessage(messages.searchPlaceholder)}
            aria-label={formatMessage(messages.searchLabel)}
          />
        </div>
      </div>
    </section>
  );
};

export default FaqsHero;
