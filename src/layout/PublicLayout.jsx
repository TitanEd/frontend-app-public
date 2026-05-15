/* eslint-disable react/prop-types */
import { useIntl } from '@edx/frontend-platform/i18n';
import { Outlet } from 'react-router-dom';

import SiteFooter from '../components/siteFooter/SiteFooter';
import Header from '../components/header/Header';
import messages from './messages';
import './PublicLayout.scss';

const PublicLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="public-layout">
      <a className="public-layout__skip-link" href="#main-content">
        {formatMessage(messages.skipToContent)}
      </a>
      <Header />
      <main
        id="main-content"
        className="public-layout__main"
        aria-label={formatMessage(messages.mainLabel)}
      >
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default PublicLayout;
