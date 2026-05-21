import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heroTitle: {
    id: 'app.termsOfService.hero.title',
    defaultMessage: 'Terms of Service',
    description: 'Terms of service page hero title',
  },
  heroLastUpdated: {
    id: 'app.termsOfService.hero.lastUpdated',
    defaultMessage: 'Last updated: April 21, 2026',
    description: 'Terms of service page last updated date',
  },
  intro: {
    id: 'app.termsOfService.intro',
    defaultMessage: 'These Terms of Service govern your use of the SEARN platform. Please read them carefully — your use of SEARN constitutes acceptance of these terms.',
    description: 'Terms of service introductory paragraph',
  },
  section01Title: {
    id: 'app.termsOfService.section01.title',
    defaultMessage: 'Acceptance of Terms',
    description: 'Terms of service section 01 title',
  },
  section01Body: {
    id: 'app.termsOfService.section01.body',
    defaultMessage: 'By accessing or using SEARN, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.',
    description: 'Terms of service section 01 body',
  },
  section02Title: {
    id: 'app.termsOfService.section02.title',
    defaultMessage: 'Eligibility',
    description: 'Terms of service section 02 title',
  },
  section02Body: {
    id: 'app.termsOfService.section02.body',
    defaultMessage: 'SEARN is intended for regulators, NRA staff, training providers, and authorized partners. You must provide accurate registration information and keep it up to date.',
    description: 'Terms of service section 02 body',
  },
  section03Title: {
    id: 'app.termsOfService.section03.title',
    defaultMessage: 'Account Responsibility',
    description: 'Terms of service section 03 title',
  },
  section03Body: {
    id: 'app.termsOfService.section03.body',
    defaultMessage: 'You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. Notify us immediately of any unauthorized access.',
    description: 'Terms of service section 03 body',
  },
  section04Title: {
    id: 'app.termsOfService.section04.title',
    defaultMessage: 'Acceptable Use',
    description: 'Terms of service section 04 title',
  },
  section04Body: {
    id: 'app.termsOfService.section04.body',
    defaultMessage: 'You agree not to misuse the platform — including no unauthorized access, no scraping, no sharing of training content outside your organization, and no upload of malicious code.',
    description: 'Terms of service section 04 body',
  },
  section05Title: {
    id: 'app.termsOfService.section05.title',
    defaultMessage: 'Intellectual Property',
    description: 'Terms of service section 05 title',
  },
  section05Body: {
    id: 'app.termsOfService.section05.body',
    defaultMessage: 'All course content, logos, and platform code are owned by SEARN, WHO, or our licensed partners. You receive a non-transferable license to use materials for professional learning purposes only.',
    description: 'Terms of service section 05 body',
  },
  section06Title: {
    id: 'app.termsOfService.section06.title',
    defaultMessage: 'Certificates',
    description: 'Terms of service section 06 title',
  },
  section06Body: {
    id: 'app.termsOfService.section06.body',
    defaultMessage: 'Certificates issued through SEARN reflect successful completion of specific learning activities. They do not constitute professional accreditation unless explicitly stated.',
    description: 'Terms of service section 06 body',
  },
  section07Title: {
    id: 'app.termsOfService.section07.title',
    defaultMessage: 'Termination',
    description: 'Terms of service section 07 title',
  },
  section07Body: {
    id: 'app.termsOfService.section07.body',
    defaultMessage: 'We reserve the right to suspend or terminate accounts that violate these terms, with or without notice, to protect the integrity of the platform and its users.',
    description: 'Terms of service section 07 body',
  },
  section08Title: {
    id: 'app.termsOfService.section08.title',
    defaultMessage: 'Limitation of Liability',
    description: 'Terms of service section 08 title',
  },
  section08Body: {
    id: 'app.termsOfService.section08.body',
    defaultMessage: 'SEARN is provided "as is." To the fullest extent permitted by law, neither WHO nor SEARN partners shall be liable for indirect or consequential damages arising from platform use.',
    description: 'Terms of service section 08 body',
  },
  section09Title: {
    id: 'app.termsOfService.section09.title',
    defaultMessage: 'Governing Law',
    description: 'Terms of service section 09 title',
  },
  section09Body: {
    id: 'app.termsOfService.section09.body',
    defaultMessage: 'These terms are governed by the laws applicable to WHO South-East Asia Regional Office operations. Disputes will be resolved through good-faith negotiation first.',
    description: 'Terms of service section 09 body',
  },
  footerPrefix: {
    id: 'app.termsOfService.footer.prefix',
    defaultMessage: 'For legal inquiries, write to',
    description: 'Terms of service footer text before email link',
  },
  footerEmail: {
    id: 'app.termsOfService.footer.email',
    defaultMessage: 'legal@searn-network.org',
    description: 'Terms of service footer contact email',
  },
  footerSuffix: {
    id: 'app.termsOfService.footer.suffix',
    defaultMessage: '.',
    description: 'Terms of service footer text after email link',
  },
});

export default messages;

export const TERMS_OF_SERVICE_SECTIONS = [
  { titleMessage: messages.section01Title, bodyMessage: messages.section01Body },
  { titleMessage: messages.section02Title, bodyMessage: messages.section02Body },
  { titleMessage: messages.section03Title, bodyMessage: messages.section03Body },
  { titleMessage: messages.section04Title, bodyMessage: messages.section04Body },
  { titleMessage: messages.section05Title, bodyMessage: messages.section05Body },
  { titleMessage: messages.section06Title, bodyMessage: messages.section06Body },
  { titleMessage: messages.section07Title, bodyMessage: messages.section07Body },
  { titleMessage: messages.section08Title, bodyMessage: messages.section08Body },
  { titleMessage: messages.section09Title, bodyMessage: messages.section09Body },
];
