/* eslint-disable react/prop-types */
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Container } from '@openedx/paragon';
import { Link } from 'react-router-dom';

import BrandLogo from '../brandLogo/BrandLogo';
import { publicRoutePath } from '../../utils/publicPath';
import messages from './messages';
import './SiteFooter.scss';

const QUICK_LINKS = [
  { message: messages.linkHome, to: publicRoutePath() },
  { message: messages.linkAbout, to: publicRoutePath('about') },
  { message: messages.linkContact, to: publicRoutePath('contact') },
  { message: messages.linkRequestJoin, to: publicRoutePath('request-to-join') },
];

const RESOURCE_LINKS = [
  { message: messages.linkFaqs, to: publicRoutePath('faqs') },
  { message: messages.linkPrivacy, to: publicRoutePath('privacy-policy') },
  { message: messages.linkTerms, to: publicRoutePath('terms-of-service') },
];

const SiteFooter = () => {
  const { formatMessage } = useIntl();
  const year = new Date().getFullYear();
  const contactEmail = formatMessage(messages.contactEmail);

  return (
    <footer className="site-footer" role="contentinfo">
      <Container fluid className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__column site-footer__brand-col">
            <Link className="site-footer__logo-link" to={publicRoutePath()}>
              <BrandLogo
                variant="footer"
                className="site-footer__logo"
                alt={formatMessage(messages.logoAlt)}
              />
            </Link>
            <p className="site-footer__tagline">
              {formatMessage(messages.tagline)}
            </p>
          </div>

          <div className="site-footer__column">
            <h4 className="site-footer__heading">
              {formatMessage(messages.quickLinksHeading)}
            </h4>
            <ul className="site-footer__link-list">
              {QUICK_LINKS.map(({ message, to }) => (
                <li key={to}>
                  <Link className="site-footer__link" to={to}>
                    {formatMessage(message)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h4 className="site-footer__heading">
              {formatMessage(messages.resourcesHeading)}
            </h4>
            <ul className="site-footer__link-list">
              {RESOURCE_LINKS.map(({ message, to }) => (
                <li key={to}>
                  <Link className="site-footer__link" to={to}>
                    {formatMessage(message)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h4 className="site-footer__heading">
              {formatMessage(messages.contactHeading)}
            </h4>
            <ul className="site-footer__contact-list">
              <li className="site-footer__contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="site-footer__contact-icon" aria-hidden="true" />
                <a className="site-footer__contact-text" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </li>
              <li className="site-footer__contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="site-footer__contact-icon" aria-hidden="true" />
                <span className="site-footer__contact-text">
                  {formatMessage(messages.contactLocation)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            {formatMessage(messages.rights, { year })}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
