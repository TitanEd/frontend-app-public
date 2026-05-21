/* eslint-disable react/prop-types */
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/requestToJoin/messages';
import './RequestToJoinSuccess.scss';

const RequestToJoinSuccess = ({ email }) => {
  const { formatMessage } = useIntl();
  const contactEmail = formatMessage(messages.successContactEmail);

  return (
    <div className="request-join-success">
      <div className="request-join-success__icon-wrap" aria-hidden="true">
        <FontAwesomeIcon icon={faCheckCircle} className="request-join-success__icon" />
      </div>
      <h2 className="request-join-success__title">
        {formatMessage(messages.successTitle)}
      </h2>
      <p className="request-join-success__body">
        <FormattedMessage
          {...messages.successBody}
          values={{
            email: <strong className="request-join-success__email">{email}</strong>,
            contactLink: (
              <a
                className="request-join-success__link"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
            ),
          }}
        />
      </p>
    </div>
  );
};

export default RequestToJoinSuccess;
