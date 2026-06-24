/* eslint-disable react/prop-types */
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/contact/messages';
import './ContactSuccess.scss';

const ContactSuccess = ({ email }) => {
  const { formatMessage } = useIntl();

  return (
    <section className="contact-form-section" aria-label={formatMessage(messages.successTitle)}>
      <div className="contact-form-section__container">
        <div className="contact-success">
          <div className="contact-success__icon-wrap" aria-hidden="true">
            <FontAwesomeIcon icon={faCheckCircle} className="contact-success__icon" />
          </div>
          <h2 className="contact-success__title">
            {formatMessage(messages.successTitle)}
          </h2>
          <p className="contact-success__body">
            <FormattedMessage
              {...messages.successBody}
              values={{
                email: <strong className="contact-success__email">{email}</strong>,
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSuccess;
