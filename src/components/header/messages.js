import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  logoAlt: {
    id: 'app.header.logo.alt',
    defaultMessage: 'SEARN',
    description: 'Accessible name for the SEARN logo image in the public header',
  },
  login: {
    id: 'app.header.actions.login',
    defaultMessage: 'Login',
    description: 'Login button label in the public header',
  },
  siteNavLandmark: {
    id: 'app.header.nav.landmark',
    defaultMessage: 'Site',
    description: 'Accessible label for the site header navigation landmark',
  },
  openMenu: {
    id: 'app.header.menu.open',
    defaultMessage: 'Open menu',
    description: 'Accessible label for the mobile menu open button',
  },
  closeMenu: {
    id: 'app.header.menu.close',
    defaultMessage: 'Close menu',
    description: 'Accessible label for the mobile menu close button',
  },
  mobileNavLabel: {
    id: 'app.header.nav.mobileLabel',
    defaultMessage: 'Site menu',
    description: 'Accessible label for the mobile navigation panel',
  },
});

export default messages;
