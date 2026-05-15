/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './InfoCard.scss';

const InfoCard = ({ icon, title, description }) => (
  <article className="about-info-card">
    <div className="about-info-card__icon-wrap">
      <FontAwesomeIcon icon={icon} className="about-info-card__icon" aria-hidden="true" />
    </div>
    <h3 className="about-info-card__title">{title}</h3>
    <p className="about-info-card__description">{description}</p>
  </article>
);

export default InfoCard;
