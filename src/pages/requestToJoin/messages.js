import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heroTitle: {
    id: 'app.requestToJoin.hero.title',
    defaultMessage: 'Request to Join the SEARN Network',
    description: 'Request to join page hero title',
  },
  heroDescription: {
    id: 'app.requestToJoin.hero.description',
    defaultMessage: 'Submit your onboarding request. The SEARN Secretariat will review your application and get back to you.',
    description: 'Request to join page hero description',
  },
  labelApplicantType: {
    id: 'app.requestToJoin.form.label.applicantType',
    defaultMessage: 'Applicant Type',
    description: 'Label for applicant type field',
  },
  applicantTypeNra: {
    id: 'app.requestToJoin.form.applicantType.nra',
    defaultMessage: 'National Regulatory Authority (NRA)',
    description: 'NRA applicant type option label',
  },
  applicantTypeTrainingProvider: {
    id: 'app.requestToJoin.form.applicantType.trainingProvider',
    defaultMessage: 'Training Provider',
    description: 'Training provider applicant type option label',
  },
  labelOrgName: {
    id: 'app.requestToJoin.form.label.orgName',
    defaultMessage: 'Organisation Name',
    description: 'Label for organisation name field',
  },
  labelCountry: {
    id: 'app.requestToJoin.form.label.country',
    defaultMessage: 'Country',
    description: 'Label for country field',
  },
  labelWebsite: {
    id: 'app.requestToJoin.form.label.website',
    defaultMessage: 'Official Website URL',
    description: 'Label for website field',
  },
  labelContactName: {
    id: 'app.requestToJoin.form.label.contactName',
    defaultMessage: 'Primary Contact Name',
    description: 'Label for primary contact name field',
  },
  labelContactEmail: {
    id: 'app.requestToJoin.form.label.contactEmail',
    defaultMessage: 'Primary Contact Email',
    description: 'Label for primary contact email field',
  },
  labelDescription: {
    id: 'app.requestToJoin.form.label.description',
    defaultMessage: 'Brief Description of Organisation',
    description: 'Label for organisation description field',
  },
  placeholderWebsite: {
    id: 'app.requestToJoin.form.placeholder.website',
    defaultMessage: 'https://example.org',
    description: 'Placeholder for website field',
  },
  countryPlaceholder: {
    id: 'app.requestToJoin.form.country.placeholder',
    defaultMessage: 'Select a country',
    description: 'Placeholder when applicant type is selected',
  },
  countryPlaceholderDisabled: {
    id: 'app.requestToJoin.form.country.placeholderDisabled',
    defaultMessage: 'Select applicant type first',
    description: 'Placeholder when applicant type is not selected',
  },
  submitButton: {
    id: 'app.requestToJoin.form.submit',
    defaultMessage: 'Submit Request',
    description: 'Submit button label',
  },
  requiredMark: {
    id: 'app.requestToJoin.form.requiredMark',
    defaultMessage: '*',
    description: 'Required field indicator',
  },
  validationRequired: {
    id: 'app.requestToJoin.form.validation.required',
    defaultMessage: '{fieldLabel} is required',
    description: 'Validation message when a required field is empty',
  },
  validationEmailInvalid: {
    id: 'app.requestToJoin.form.validation.emailInvalid',
    defaultMessage: 'Primary Contact Email must be a valid email',
    description: 'Validation message when email format is invalid',
  },
  validationWebsiteInvalid: {
    id: 'app.requestToJoin.form.validation.websiteInvalid',
    defaultMessage: 'Official Website URL must be a valid URL',
    description: 'Validation message when website format is invalid',
  },
  toastApplicantTypeTitle: {
    id: 'app.requestToJoin.toast.applicantType.title',
    defaultMessage: 'Applicant Type required',
    description: 'Toast title when applicant type is not selected',
  },
  toastApplicantTypeDescription: {
    id: 'app.requestToJoin.toast.applicantType.description',
    defaultMessage: 'Please select an applicant type.',
    description: 'Toast description when applicant type is not selected',
  },
  toastMissingTitle: {
    id: 'app.requestToJoin.toast.missing.title',
    defaultMessage: 'Missing information',
    description: 'Toast title when required fields are missing',
  },
  toastMissingDescription: {
    id: 'app.requestToJoin.toast.missing.description',
    defaultMessage: 'Please fill in all required fields.',
    description: 'Toast description when required fields are missing',
  },
  successTitle: {
    id: 'app.requestToJoin.success.title',
    defaultMessage: 'Thank you for your interest in joining the SEARN Network.',
    description: 'Success state heading after form submission',
  },
  successBody: {
    id: 'app.requestToJoin.success.body',
    defaultMessage: 'Your onboarding request has been successfully submitted and is now under review by the SEARN Secretariat. You will be contacted at {email} once your application has been reviewed. Please allow 10–15 working days for the review process. If you have any questions in the meantime, contact us at {contactLink}.',
    description: 'Success state body after form submission',
  },
  successContactEmail: {
    id: 'app.requestToJoin.success.contactEmail',
    defaultMessage: 'contact@searn-network.org',
    description: 'Contact email shown in success state',
  },
});

export default messages;
