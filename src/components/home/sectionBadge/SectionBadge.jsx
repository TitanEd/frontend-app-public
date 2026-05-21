/* eslint-disable react/prop-types */
import './SectionBadge.scss';

const SectionBadge = ({ children, variant = 'primary' }) => (
  <span className={`home-section-badge home-section-badge--${variant}`}>
    {children}
  </span>
);

export default SectionBadge;
