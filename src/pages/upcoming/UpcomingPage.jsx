/* eslint-disable react/prop-types */
import { useIntl } from '@edx/frontend-platform/i18n';
import { Container } from '@openedx/paragon';

import messages, { UPCOMING_PAGE_TITLES } from './messages';
import './UpcomingPage.scss';

const UpcomingPage = ({ pageKey }) => {
  const { formatMessage } = useIntl();
  const titleMessage = UPCOMING_PAGE_TITLES[pageKey];

  if (!titleMessage) {
    return null;
  }

  return (
    <Container fluid className="upcoming-page px-4">
      <div className="upcoming-page__inner">
        <h1 className="upcoming-page__title">
          {formatMessage(titleMessage)}
        </h1>
        <p className="upcoming-page__body mb-0">
          {formatMessage(messages.upcomingBody)}
        </p>
      </div>
    </Container>
  );
};

export default UpcomingPage;
