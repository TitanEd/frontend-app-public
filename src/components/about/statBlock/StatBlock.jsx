/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './StatBlock.scss';

const StatBlock = ({ icon, value, label }) => (
  <div className="about-stat-block">
    <div className="about-stat-block__icon-wrap">
      <FontAwesomeIcon icon={icon} className="about-stat-block__icon" aria-hidden="true" />
    </div>
    <div className="about-stat-block__value">{value}</div>
    <div className="about-stat-block__label">{label}</div>
  </div>
);

export default StatBlock;
