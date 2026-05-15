/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactChannelCard.scss';

const ContactChannelCard = ({
  icon, title, value, subtitle,
}) => (
  <article className="contact-channel-card">
    <div className="contact-channel-card__icon-wrap">
      <FontAwesomeIcon icon={icon} className="contact-channel-card__icon" aria-hidden="true" />
    </div>
    <h3 className="contact-channel-card__title">{title}</h3>
    <p className="contact-channel-card__value">{value}</p>
    <p className="contact-channel-card__subtitle">{subtitle}</p>
  </article>
);

export default ContactChannelCard;
