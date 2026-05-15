/* eslint-disable react/prop-types */
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Container } from '@openedx/paragon';
import {
  useCallback, useEffect, useId, useState,
} from 'react';
import { Link } from 'react-router-dom';

import { HEADER_LOGO_SRC } from '../../utils/brandAssets';
import { publicRoutePath, withPublicPrefix } from '../../utils/publicPath';
import messages from './messages';
import './Header.scss';

const Header = () => {
  const { formatMessage } = useIntl();
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelId = useId();
  const { LOGIN_URL: loginUrlFromConfig = '' } = getConfig();
  const loginHref = loginUrlFromConfig || withPublicPrefix('/login');

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMobile();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <nav
      className={`header${mobileOpen ? ' header--mobile-open' : ''}`}
      aria-label={formatMessage(messages.siteNavLandmark)}
    >
      <Container fluid className="header__inner">
        <div className="header__row">
          <Link className="header__logo-link" to={publicRoutePath()} onClick={closeMobile}>
            <img
              className="header__logo"
              src={HEADER_LOGO_SRC}
              alt={formatMessage(messages.logoAlt)}
            />
          </Link>

          <div
            className="header__desktop-nav d-none d-lg-flex align-items-center flex-grow-1"
            aria-hidden="true"
          />

          <div className="header__desktop-actions d-none d-lg-flex align-items-center">
            <a
              href={loginHref}
              className="header__login-btn btn-primary-border"
            >
              {formatMessage(messages.login)}
            </a>
          </div>

          <button
            type="button"
            className="header__menu-btn d-lg-none"
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            aria-label={mobileOpen ? formatMessage(messages.closeMenu) : formatMessage(messages.openMenu)}
            onClick={toggleMobile}
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="header__menu-icon"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <FontAwesomeIcon icon={faBars} className="header__menu-icon" />
            )}
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="header__backdrop d-lg-none"
            aria-label={formatMessage(messages.closeMenu)}
            onClick={closeMobile}
          />
          <div
            id={panelId}
            className="header__mobile-panel d-lg-none"
            role="region"
            aria-label={formatMessage(messages.mobileNavLabel)}
          >
            <Container fluid className="header__mobile-inner">
              <div className="header__mobile-actions">
                <div className="header__mobile-login-wrap">
                  <a
                    href={loginHref}
                    className="header__login-btn header__login-btn--mobile btn-primary-border"
                    onClick={closeMobile}
                  >
                    {formatMessage(messages.login)}
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </>
      ) : null}
    </nav>
  );
};

export default Header;
