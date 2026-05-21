import { useIntl } from '@edx/frontend-platform/i18n';

import messages, { TERMS_OF_SERVICE_SECTIONS } from '../../../pages/termsOfService/messages';
import './TermsOfServiceContent.scss';

const TermsOfServiceContent = () => {
  const { formatMessage } = useIntl();
  const contactEmail = formatMessage(messages.footerEmail);

  return (
    <div className="terms-of-service-content">
      <p className="terms-of-service-content__intro">
        {formatMessage(messages.intro)}
      </p>

      <div className="terms-of-service-content__sections">
        {TERMS_OF_SERVICE_SECTIONS.map((section, index) => {
          const sectionNumber = String(index + 1).padStart(2, '0');
          const sectionId = `terms-of-service-section-${sectionNumber}`;

          return (
            <section key={sectionId} className="terms-of-service-content__section" aria-labelledby={sectionId}>
              <h2 id={sectionId} className="terms-of-service-content__section-title">
                <span className="terms-of-service-content__section-number">
                  {sectionNumber}
                  .
                </span>
                {formatMessage(section.titleMessage)}
              </h2>
              <p className="terms-of-service-content__section-body">
                {formatMessage(section.bodyMessage)}
              </p>
            </section>
          );
        })}
      </div>

      <p className="terms-of-service-content__footer">
        {formatMessage(messages.footerPrefix)}
        {' '}
        <a
          href={`mailto:${contactEmail}`}
          className="terms-of-service-content__footer-link"
        >
          {contactEmail}
        </a>
        {formatMessage(messages.footerSuffix)}
      </p>
    </div>
  );
};

export default TermsOfServiceContent;
