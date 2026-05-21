import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heroTitle: {
    id: 'app.faqs.hero.title',
    defaultMessage: 'Frequently Asked Questions',
    description: 'FAQs page hero title',
  },
  heroDescription: {
    id: 'app.faqs.hero.description',
    defaultMessage: 'Find quick answers about SEARN — registration, trainings, certificates, and more.',
    description: 'FAQs page hero description',
  },
  searchPlaceholder: {
    id: 'app.faqs.search.placeholder',
    defaultMessage: 'Search for a question...',
    description: 'Placeholder for FAQ search input',
  },
  searchLabel: {
    id: 'app.faqs.search.label',
    defaultMessage: 'Search FAQs',
    description: 'Accessible label for FAQ search input',
  },
  emptyState: {
    id: 'app.faqs.empty.state',
    defaultMessage: 'No questions match "{query}". Try a different keyword or {contactLink}.',
    description: 'Message when FAQ search returns no results',
  },
  emptyStateContactLink: {
    id: 'app.faqs.empty.contactLink',
    defaultMessage: 'contact us',
    description: 'Contact link text in FAQ empty search state',
  },
  accordionExpand: {
    id: 'app.faqs.accordion.expand',
    defaultMessage: 'Show answer',
    description: 'Accessible label when FAQ accordion item is collapsed',
  },
  accordionCollapse: {
    id: 'app.faqs.accordion.collapse',
    defaultMessage: 'Hide answer',
    description: 'Accessible label when FAQ accordion item is expanded',
  },
});

export default messages;
