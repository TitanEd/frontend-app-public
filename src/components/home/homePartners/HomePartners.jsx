/* eslint-disable react/prop-types */
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/home/messages';
import PartnerTile from '../partnerTile/PartnerTile';
import SectionBadge from '../sectionBadge/SectionBadge';
import './HomePartners.scss';

const PARTNER_MESSAGE_KEYS = [
  messages.partnerGoogle,
  messages.partnerMicrosoft,
  messages.partnerNasscom,
  messages.partnerNiti,
  messages.partnerIit,
  messages.partnerTata,
  messages.partnerUnesco,
  messages.partnerUnicef,
];

const HomePartners = () => {
  const { formatMessage } = useIntl();

  return (
    <section id="partners" className="home-partners">
      <div className="home-partners__container">
        <div className="home-partners__intro">
          <SectionBadge variant="muted">
            {formatMessage(messages.partnersBadge)}
          </SectionBadge>
          <h2 className="home-partners__title">
            {formatMessage(messages.partnersTitle)}
          </h2>
          <p className="home-partners__description">
            {formatMessage(messages.partnersDescription)}
          </p>
        </div>

        <div className="home-partners__grid">
          {PARTNER_MESSAGE_KEYS.map((message) => (
            <PartnerTile key={message.id} name={formatMessage(message)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
