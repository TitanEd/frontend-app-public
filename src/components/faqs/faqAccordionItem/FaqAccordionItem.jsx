/* eslint-disable react/prop-types */
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/faqs/messages';
import './FaqAccordionItem.scss';

const FaqAccordionItem = ({
  itemId,
  question,
  answer,
  isOpen,
  onToggle,
  isLast,
}) => {
  const { formatMessage } = useIntl();
  const panelId = `faq-panel-${itemId}`;
  const triggerId = `faq-trigger-${itemId}`;

  return (
    <div className={`faq-accordion-item${isLast ? ' faq-accordion-item--last' : ''}`}>
      <h3 className="faq-accordion-item__heading">
        <button
          type="button"
          id={triggerId}
          className="faq-accordion-item__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq-accordion-item__question">{question}</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="faq-accordion-item__chevron"
            aria-hidden="true"
          />
          <span className="sr-only">
            {formatMessage(isOpen ? messages.accordionCollapse : messages.accordionExpand)}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`faq-accordion-item__panel${isOpen ? ' faq-accordion-item__panel--open' : ''}`}
        hidden={!isOpen}
      >
        <p className="faq-accordion-item__answer">{answer}</p>
      </div>
    </div>
  );
};

export default FaqAccordionItem;
