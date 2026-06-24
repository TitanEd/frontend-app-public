/* eslint-disable react/prop-types */
import { useIntl } from '@edx/frontend-platform/i18n';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';

import { submitPendingRequest } from '../../../api/pendingRequestsApi';
import ALL_COUNTRIES from '../../../data/allCountries';
import SEARN_COUNTRIES from '../../../data/searnCountries';
import messages from '../../../pages/requestToJoin/messages';
import { useToast } from '../../toast/ToastContext';
import { showToastFromApi } from '../../../utils/showApiToast';
import './RequestToJoinForm.scss';

const APPLICANT_NRA = 'NRA';
const APPLICANT_TRAINING = 'TrainingProvider';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_PATTERN = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-./?%&=]*)?$/i;

const EMPTY_FORM = {
  orgName: '',
  country: '',
  website: '',
  contactName: '',
  contactEmail: '',
  description: '',
};

const RequestToJoinForm = ({ onSuccess }) => {
  const { formatMessage } = useIntl();
  const { showToast } = useToast();
  const [applicantType, setApplicantType] = useState('');
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const mutation = useMutation({ mutationFn: submitPendingRequest });

  const countryList = useMemo(() => (
    applicantType === APPLICANT_NRA ? SEARN_COUNTRIES : ALL_COUNTRIES
  ), [applicantType]);

  const labelMessages = {
    orgName: messages.labelOrgName,
    country: messages.labelCountry,
    website: messages.labelWebsite,
    contactName: messages.labelContactName,
    contactEmail: messages.labelContactEmail,
    description: messages.labelDescription,
  };

  const clearError = (key) => {
    setErrors((prev) => {
      if (!prev[key]) {
        return prev;
      }
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleApplicantTypeSelect = (value) => {
    setApplicantType((prev) => {
      const next = prev === value ? '' : value;
      if (next !== prev) {
        setForm((f) => ({ ...f, country: '' }));
        clearError('country');
        clearError('applicantType');
      }
      return next;
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  const validate = useCallback(() => {
    const nextErrors = {};

    if (!applicantType) {
      nextErrors.applicantType = formatMessage(messages.validationRequired, {
        fieldLabel: formatMessage(messages.labelApplicantType),
      });
    }

    Object.keys(labelMessages).forEach((key) => {
      if (!form[key].trim()) {
        nextErrors[key] = formatMessage(messages.validationRequired, {
          fieldLabel: formatMessage(labelMessages[key]),
        });
      }
    });

    if (!nextErrors.contactEmail && form.contactEmail.trim() && !EMAIL_PATTERN.test(form.contactEmail.trim())) {
      nextErrors.contactEmail = formatMessage(messages.validationEmailInvalid);
    }

    if (!nextErrors.website && form.website.trim() && !URL_PATTERN.test(form.website.trim())) {
      nextErrors.website = formatMessage(messages.validationWebsiteInvalid);
    }

    return nextErrors;
  }, [applicantType, form, formatMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      if (!applicantType) {
        showToast({
          title: formatMessage(messages.toastApplicantTypeTitle),
          description: formatMessage(messages.toastApplicantTypeDescription),
        });
      } else {
        showToast({
          title: formatMessage(messages.toastMissingTitle),
          description: formatMessage(messages.toastMissingDescription),
        });
      }
      return;
    }

    mutation.mutate(
      {
        applicantType,
        organisationName: form.orgName,
        country: form.country,
        website: form.website,
        contactName: form.contactName,
        contactEmail: form.contactEmail,
        description: form.description,
      },
      {
        onSuccess: () => onSuccess(form.contactEmail.trim()),
        onError: (error) => {
          showToastFromApi(showToast, {
            success: false,
            data: error?.response?.data,
            fallback: {
              errorTitle: formatMessage(messages.toastErrorTitle),
              errorDescription: formatMessage(messages.toastErrorDescription),
            },
          });
        },
      },
    );
  };

  const renderRequiredLabel = (labelMessage) => (
    <>
      {formatMessage(labelMessage)}
      {' '}
      <span className="request-join-form__required" aria-hidden="true">
        {formatMessage(messages.requiredMark)}
      </span>
    </>
  );

  const renderFieldError = (fieldId, fieldName) => (
    errors[fieldName] ? (
      <p id={`${fieldId}-error`} className="request-join-form__error" role="alert">
        {errors[fieldName]}
      </p>
    ) : null
  );

  const inputClass = (fieldName) => (
    `request-join-form__input${errors[fieldName] ? ' request-join-form__input--error' : ''}`
  );

  return (
    <form className="request-join-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="request-join-form__fieldset">
        <legend className="request-join-form__label request-join-form__legend">
          {renderRequiredLabel(messages.labelApplicantType)}
        </legend>
        <div
          className="request-join-form__radio-group"
          role="radiogroup"
          aria-invalid={Boolean(errors.applicantType)}
          aria-describedby={errors.applicantType ? 'applicant-type-error' : undefined}
        >
          <label
            className={`request-join-form__radio-option${applicantType === APPLICANT_NRA ? ' request-join-form__radio-option--selected' : ''}`}
          >
            <input
              type="radio"
              name="applicantType"
              className="request-join-form__radio-input"
              checked={applicantType === APPLICANT_NRA}
              onClick={() => handleApplicantTypeSelect(APPLICANT_NRA)}
              onChange={() => {}}
            />
            <span>{formatMessage(messages.applicantTypeNra)}</span>
          </label>
          <label
            className={`request-join-form__radio-option${applicantType === APPLICANT_TRAINING ? ' request-join-form__radio-option--selected' : ''}`}
          >
            <input
              type="radio"
              name="applicantType"
              className="request-join-form__radio-input"
              checked={applicantType === APPLICANT_TRAINING}
              onClick={() => handleApplicantTypeSelect(APPLICANT_TRAINING)}
              onChange={() => {}}
            />
            <span>{formatMessage(messages.applicantTypeTrainingProvider)}</span>
          </label>
        </div>
        {errors.applicantType ? (
          <p id="applicant-type-error" className="request-join-form__error" role="alert">
            {errors.applicantType}
          </p>
        ) : null}
      </fieldset>

      <div className="request-join-form__field">
        <label className="request-join-form__label" htmlFor="orgName">
          {renderRequiredLabel(messages.labelOrgName)}
        </label>
        <input
          id="orgName"
          name="orgName"
          className={inputClass('orgName')}
          value={form.orgName}
          onChange={handleChange}
          maxLength={200}
          aria-invalid={Boolean(errors.orgName)}
          aria-describedby={errors.orgName ? 'orgName-error' : undefined}
        />
        {renderFieldError('orgName', 'orgName')}
      </div>

      <div className="request-join-form__field">
        <label className="request-join-form__label" htmlFor="country">
          {renderRequiredLabel(messages.labelCountry)}
        </label>
        <select
          id="country"
          name="country"
          className={`${inputClass('country')} request-join-form__select`}
          value={form.country}
          onChange={handleChange}
          disabled={!applicantType}
          aria-invalid={Boolean(errors.country)}
          aria-describedby={errors.country ? 'country-error' : undefined}
        >
          <option value="">
            {formatMessage(
              applicantType ? messages.countryPlaceholder : messages.countryPlaceholderDisabled,
            )}
          </option>
          {countryList.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {renderFieldError('country', 'country')}
      </div>

      <div className="request-join-form__field">
        <label className="request-join-form__label" htmlFor="website">
          {renderRequiredLabel(messages.labelWebsite)}
        </label>
        <input
          id="website"
          name="website"
          type="text"
          className={inputClass('website')}
          value={form.website}
          onChange={handleChange}
          placeholder={formatMessage(messages.placeholderWebsite)}
          maxLength={300}
          aria-invalid={Boolean(errors.website)}
          aria-describedby={errors.website ? 'website-error' : undefined}
        />
        {renderFieldError('website', 'website')}
      </div>

      <div className="request-join-form__field">
        <label className="request-join-form__label" htmlFor="contactName">
          {renderRequiredLabel(messages.labelContactName)}
        </label>
        <input
          id="contactName"
          name="contactName"
          className={inputClass('contactName')}
          value={form.contactName}
          onChange={handleChange}
          maxLength={150}
          aria-invalid={Boolean(errors.contactName)}
          aria-describedby={errors.contactName ? 'contactName-error' : undefined}
        />
        {renderFieldError('contactName', 'contactName')}
      </div>

      <div className="request-join-form__field">
        <label className="request-join-form__label" htmlFor="contactEmail">
          {renderRequiredLabel(messages.labelContactEmail)}
        </label>
        <input
          id="contactEmail"
          name="contactEmail"
          type="email"
          className={inputClass('contactEmail')}
          value={form.contactEmail}
          onChange={handleChange}
          maxLength={255}
          aria-invalid={Boolean(errors.contactEmail)}
          aria-describedby={errors.contactEmail ? 'contactEmail-error' : undefined}
        />
        {renderFieldError('contactEmail', 'contactEmail')}
      </div>

      <div className="request-join-form__field">
        <label className="request-join-form__label" htmlFor="description">
          {renderRequiredLabel(messages.labelDescription)}
        </label>
        <textarea
          id="description"
          name="description"
          className={`${inputClass('description')} request-join-form__textarea`}
          value={form.description}
          onChange={handleChange}
          rows={5}
          maxLength={2000}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? 'description-error' : undefined}
        />
        {renderFieldError('description', 'description')}
      </div>

      <button type="submit" className="request-join-form__submit" disabled={mutation.isPending}>
        {formatMessage(mutation.isPending ? messages.submitButtonSubmitting : messages.submitButton)}
      </button>
    </form>
  );
};

export default RequestToJoinForm;
