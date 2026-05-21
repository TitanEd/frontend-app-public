import { useIntl } from '@edx/frontend-platform/i18n';

import messages, { PRIVACY_POLICY_SECTIONS } from '../../../pages/privacyPolicy/messages';
import './PrivacyPolicyContent.scss';

const PrivacyPolicyContent = () => {
  const { formatMessage } = useIntl();
  const contactEmail = formatMessage(messages.footerEmail);

  return (
    <div className="privacy-policy-content">
      <p className="privacy-policy-content__intro">
        {formatMessage(messages.intro)}
      </p>

      <div className="privacy-policy-content__sections">
        {PRIVACY_POLICY_SECTIONS.map((section, index) => {
          const sectionNumber = String(index + 1).padStart(2, '0');
          const sectionId = `privacy-policy-section-${sectionNumber}`;

          return (
            <section key={sectionId} className="privacy-policy-content__section" aria-labelledby={sectionId}>
              <h2 id={sectionId} className="privacy-policy-content__section-title">
                <span className="privacy-policy-content__section-number">
                  {sectionNumber}
                  .
                </span>
                {formatMessage(section.titleMessage)}
              </h2>
              <p className="privacy-policy-content__section-body">
                {formatMessage(section.bodyMessage)}
              </p>
            </section>
          );
        })}
      </div>

      <p className="privacy-policy-content__footer">
        {formatMessage(messages.footerPrefix)}
        {' '}
        <a
          href={`mailto:${contactEmail}`}
          className="privacy-policy-content__footer-link"
        >
          {contactEmail}
        </a>
        {formatMessage(messages.footerSuffix)}
      </p>
    </div>
  );
};

export default PrivacyPolicyContent;
