/* eslint-disable react/prop-types */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './HighlightButton.scss';

const HighlightButton = ({
  children,
  as: Component = 'button',
  className = '',
  showArrow = true,
  ...props
}) => (
  <Component
    className={`home-highlight-btn${className ? ` ${className}` : ''}`}
    {...props}
  >
    <span className="home-highlight-btn__label">{children}</span>
    {showArrow ? (
      <FontAwesomeIcon icon={faArrowRight} className="home-highlight-btn__icon" aria-hidden="true" />
    ) : null}
  </Component>
);

export default HighlightButton;
