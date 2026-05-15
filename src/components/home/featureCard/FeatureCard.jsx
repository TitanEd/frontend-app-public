/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FeatureCard.scss';

const FeatureCard = ({ icon, title, description }) => (
  <article className="home-feature-card">
    <div className="home-feature-card__glow" aria-hidden="true" />
    <div className="home-feature-card__panel">
      <div className="home-feature-card__icon-wrap">
        <FontAwesomeIcon icon={icon} className="home-feature-card__icon" aria-hidden="true" />
      </div>
      <h3 className="home-feature-card__title">{title}</h3>
      <p className="home-feature-card__description">{description}</p>
    </div>
  </article>
);

export default FeatureCard;
