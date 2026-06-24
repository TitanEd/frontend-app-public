import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heroTitle: {
    id: 'app.privacyPolicy.hero.title',
    defaultMessage: 'Privacy Policy',
    description: 'Privacy policy page hero title',
  },
  heroLastUpdated: {
    id: 'app.privacyPolicy.hero.lastUpdated',
    defaultMessage: 'Last updated: June 21, 2026',
    description: 'Privacy policy page last updated date',
  },
  intro: {
    id: 'app.privacyPolicy.intro',
    defaultMessage: 'SEARN is committed to protecting the privacy of every regulator, learner, and partner who uses our platform. This policy explains what data we collect, how we use it, and the rights you have over your information.',
    description: 'Privacy policy introductory paragraph',
  },
  section01Title: {
    id: 'app.privacyPolicy.section01.title',
    defaultMessage: 'Information We Collect',
    description: 'Privacy policy section 01 title',
  },
  section01Body: {
    id: 'app.privacyPolicy.section01.body',
    defaultMessage: 'We collect information you provide directly — such as your name, email, professional role, and country — when you register, complete training, or contact us. We also collect technical data (browser type, IP address, usage logs) to improve the platform.',
    description: 'Privacy policy section 01 body',
  },
  section02Title: {
    id: 'app.privacyPolicy.section02.title',
    defaultMessage: 'How We Use Your Information',
    description: 'Privacy policy section 02 title',
  },
  section02Body: {
    id: 'app.privacyPolicy.section02.body',
    defaultMessage: 'Your data is used to deliver learning experiences, track competency progress, issue certificates, and generate aggregated insights for WHO and partner NRAs. We never sell your personal information.',
    description: 'Privacy policy section 02 body',
  },
  section03Title: {
    id: 'app.privacyPolicy.section03.title',
    defaultMessage: 'Data Sharing',
    description: 'Privacy policy section 03 title',
  },
  section03Body: {
    id: 'app.privacyPolicy.section03.body',
    defaultMessage: 'We share data only with: (a) your home NRA for capacity-building reporting, (b) WHO for regional aggregate analytics, and (c) trusted training providers strictly for course delivery. All partners are bound by confidentiality.',
    description: 'Privacy policy section 03 body',
  },
  section04Title: {
    id: 'app.privacyPolicy.section04.title',
    defaultMessage: 'Data Security',
    description: 'Privacy policy section 04 title',
  },
  section04Body: {
    id: 'app.privacyPolicy.section04.body',
    defaultMessage: 'SEARN uses industry-standard encryption (TLS in transit, AES-256 at rest), role-based access controls, and regular security audits to protect your information.',
    description: 'Privacy policy section 04 body',
  },
  section05Title: {
    id: 'app.privacyPolicy.section05.title',
    defaultMessage: 'Your Rights',
    description: 'Privacy policy section 05 title',
  },
  section05Body: {
    id: 'app.privacyPolicy.section05.body',
    defaultMessage: 'You may access, correct, export, or delete your personal data at any time from your profile, or by contacting our Data Protection Officer at privacy@searn-network.org.',
    description: 'Privacy policy section 05 body',
  },
  section06Title: {
    id: 'app.privacyPolicy.section06.title',
    defaultMessage: 'Cookies',
    description: 'Privacy policy section 06 title',
  },
  section06Body: {
    id: 'app.privacyPolicy.section06.body',
    defaultMessage: 'We use essential cookies for authentication and analytics cookies (anonymized) to understand platform usage. You can control non-essential cookies in your browser settings.',
    description: 'Privacy policy section 06 body',
  },
  section07Title: {
    id: 'app.privacyPolicy.section07.title',
    defaultMessage: 'Updates to This Policy',
    description: 'Privacy policy section 07 title',
  },
  section07Body: {
    id: 'app.privacyPolicy.section07.body',
    defaultMessage: 'We may update this policy to reflect changes in our practices. Material changes will be communicated via email and an in-platform notice.',
    description: 'Privacy policy section 07 body',
  },
  footerPrefix: {
    id: 'app.privacyPolicy.footer.prefix',
    defaultMessage: 'Questions? Contact our Data Protection Officer at',
    description: 'Privacy policy footer text before email link',
  },
  footerEmail: {
    id: 'app.privacyPolicy.footer.email',
    defaultMessage: 'privacy@searn-network.org',
    description: 'Privacy policy footer contact email',
  },
  footerSuffix: {
    id: 'app.privacyPolicy.footer.suffix',
    defaultMessage: '.',
    description: 'Privacy policy footer text after email link',
  },
});

export default messages;

export const PRIVACY_POLICY_SECTIONS = [
  { titleMessage: messages.section01Title, bodyMessage: messages.section01Body },
  { titleMessage: messages.section02Title, bodyMessage: messages.section02Body },
  { titleMessage: messages.section03Title, bodyMessage: messages.section03Body },
  { titleMessage: messages.section04Title, bodyMessage: messages.section04Body },
  { titleMessage: messages.section05Title, bodyMessage: messages.section05Body },
  { titleMessage: messages.section06Title, bodyMessage: messages.section06Body },
  { titleMessage: messages.section07Title, bodyMessage: messages.section07Body },
];
