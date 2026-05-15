import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heroBadge: {
    id: 'app.contact.hero.badge',
    defaultMessage: 'Get in Touch',
    description: 'Badge label in the contact page hero',
  },
  heroTitle: {
    id: 'app.contact.hero.title',
    defaultMessage: 'Let\'s Start a Conversation',
    description: 'Contact page hero title',
  },
  heroDescription: {
    id: 'app.contact.hero.description',
    defaultMessage: 'Questions, partnerships, or feedback — our team is here to help.',
    description: 'Contact page hero description',
  },
  channelEmailTitle: {
    id: 'app.contact.channel.email.title',
    defaultMessage: 'Email',
    description: 'Contact channel card title for email',
  },
  channelEmailValue: {
    id: 'app.contact.channel.email.value',
    defaultMessage: 'contact@searn-network.org',
    description: 'Contact channel card email address',
  },
  channelEmailSub: {
    id: 'app.contact.channel.email.sub',
    defaultMessage: 'We reply within 48 hours',
    description: 'Contact channel card email subtitle',
  },
  channelOfficeTitle: {
    id: 'app.contact.channel.office.title',
    defaultMessage: 'Office',
    description: 'Contact channel card title for office',
  },
  channelOfficeValue: {
    id: 'app.contact.channel.office.value',
    defaultMessage: 'New Delhi, India',
    description: 'Contact channel card office location',
  },
  channelOfficeSub: {
    id: 'app.contact.channel.office.sub',
    defaultMessage: 'WHO South-East Asia Regional Office',
    description: 'Contact channel card office subtitle',
  },
  formTitle: {
    id: 'app.contact.form.title',
    defaultMessage: 'Send us a message',
    description: 'Contact form section heading',
  },
  formResponseTime: {
    id: 'app.contact.form.responseTime',
    defaultMessage: 'Typical response time: 2 business days',
    description: 'Contact form response time note',
  },
  labelName: {
    id: 'app.contact.form.label.name',
    defaultMessage: 'Full Name',
    description: 'Contact form label for full name field',
  },
  labelEmail: {
    id: 'app.contact.form.label.email',
    defaultMessage: 'Email Address',
    description: 'Contact form label for email field',
  },
  labelSubject: {
    id: 'app.contact.form.label.subject',
    defaultMessage: 'Subject',
    description: 'Contact form label for subject field',
  },
  labelMessage: {
    id: 'app.contact.form.label.message',
    defaultMessage: 'Message',
    description: 'Contact form label for message field',
  },
  placeholderName: {
    id: 'app.contact.form.placeholder.name',
    defaultMessage: 'Jane Doe',
    description: 'Contact form placeholder for full name',
  },
  placeholderEmail: {
    id: 'app.contact.form.placeholder.email',
    defaultMessage: 'you@example.com',
    description: 'Contact form placeholder for email',
  },
  placeholderSubject: {
    id: 'app.contact.form.placeholder.subject',
    defaultMessage: 'How can we help?',
    description: 'Contact form placeholder for subject',
  },
  placeholderMessage: {
    id: 'app.contact.form.placeholder.message',
    defaultMessage: 'Tell us a bit more...',
    description: 'Contact form placeholder for message',
  },
  submitButton: {
    id: 'app.contact.form.submit',
    defaultMessage: 'Send Message',
    description: 'Contact form submit button label',
  },
  validationRequired: {
    id: 'app.contact.form.validation.required',
    defaultMessage: '{fieldLabel} is required',
    description: 'Validation message when a required field is empty',
  },
  validationEmailInvalid: {
    id: 'app.contact.form.validation.emailInvalid',
    defaultMessage: 'Email Address must be a valid email',
    description: 'Validation message when email format is invalid',
  },
  toastSuccessTitle: {
    id: 'app.contact.toast.success.title',
    defaultMessage: 'Message sent!',
    description: 'Toast title after contact form is submitted successfully',
  },
  toastSuccessDescription: {
    id: 'app.contact.toast.success.description',
    defaultMessage: 'We\'ll get back to you within 2 business days.',
    description: 'Toast description after contact form is submitted successfully',
  },
});

export default messages;
