import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  upcomingBody: {
    id: 'app.upcoming.body',
    defaultMessage: 'This page is coming soon.',
    description: 'Message shown on placeholder pages that are not yet implemented',
  },
  titleAbout: {
    id: 'app.upcoming.title.about',
    defaultMessage: 'About Us',
    description: 'Page title for About Us placeholder',
  },
  titleContact: {
    id: 'app.upcoming.title.contact',
    defaultMessage: 'Contact Us',
    description: 'Page title for Contact Us placeholder',
  },
  titleRequestJoin: {
    id: 'app.upcoming.title.requestJoin',
    defaultMessage: 'Request to Join',
    description: 'Page title for Request to Join placeholder',
  },
  titleFaqs: {
    id: 'app.upcoming.title.faqs',
    defaultMessage: 'FAQs',
    description: 'Page title for FAQs placeholder',
  },
  titlePrivacy: {
    id: 'app.upcoming.title.privacy',
    defaultMessage: 'Privacy Policy',
    description: 'Page title for Privacy Policy placeholder',
  },
  titleTerms: {
    id: 'app.upcoming.title.terms',
    defaultMessage: 'Terms of Service',
    description: 'Page title for Terms of Service placeholder',
  },
});

export const UPCOMING_PAGE_TITLES = {
  about: messages.titleAbout,
  contact: messages.titleContact,
  'request-to-join': messages.titleRequestJoin,
  faqs: messages.titleFaqs,
  'privacy-policy': messages.titlePrivacy,
  'terms-of-service': messages.titleTerms,
};

export default messages;
