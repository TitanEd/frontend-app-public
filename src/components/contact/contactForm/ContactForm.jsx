/* eslint-disable react/prop-types */
import { faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from '@edx/frontend-platform/i18n';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

import { submitContactUs } from '../../../api/contactUsApi';
import { useToast } from '../../toast/ToastContext';
import { showToastFromApi } from '../../../utils/showApiToast';
import messages from '../../../pages/contact/messages';
import './ContactForm.scss';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const FIELD_KEYS = ['name', 'email', 'subject', 'message'];

const ContactForm = ({ onSuccess }) => {
  const { formatMessage } = useIntl();
  const { showToast } = useToast();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const mutation = useMutation({ mutationFn: submitContactUs });

  const labelMessages = {
    name: messages.labelName,
    email: messages.labelEmail,
    subject: messages.labelSubject,
    message: messages.labelMessage,
  };

  const validate = useCallback(() => {
    const nextErrors = {};

    FIELD_KEYS.forEach((key) => {
      if (!form[key].trim()) {
        nextErrors[key] = formatMessage(messages.validationRequired, {
          fieldLabel: formatMessage(labelMessages[key]),
        });
      }
    });

    if (!nextErrors.email && form.email.trim() && !EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = formatMessage(messages.validationEmailInvalid);
    }

    return nextErrors;
  }, [form, formatMessage]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    mutation.mutate(form, {
      onSuccess: () => {
        const email = form.email.trim();
        setForm(EMPTY_FORM);
        setErrors({});
        onSuccess(email);
      },
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
    });
  };

  const renderField = ({
    id, name, labelMessage, placeholderMessage, type = 'text', multiline = false,
  }) => {
    const label = formatMessage(labelMessage);
    const fieldId = `contact-${id}`;
    const hasError = Boolean(errors[name]);
    const inputClassName = `contact-form__input${hasError ? ' contact-form__input--error' : ''}`;
    const inputProps = {
      id: fieldId,
      name,
      value: form[name],
      onChange: handleChange,
      className: inputClassName,
      placeholder: formatMessage(placeholderMessage),
      'aria-invalid': hasError,
      'aria-describedby': hasError ? `${fieldId}-error` : undefined,
    };

    return (
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor={fieldId}>
          {label}
        </label>
        {multiline ? (
          <textarea
            {...inputProps}
            className={`${inputClassName} contact-form__textarea`}
            rows={6}
          />
        ) : (
          <input {...inputProps} type={type} />
        )}
        {hasError ? (
          <p id={`${fieldId}-error`} className="contact-form__error" role="alert">
            {errors[name]}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-title">
      <div className="contact-form-section__container">
        <div className="contact-form-section__card">
          <h2 id="contact-form-title" className="contact-form-section__title">
            {formatMessage(messages.formTitle)}
          </h2>
          <p className="contact-form-section__note">
            <FontAwesomeIcon icon={faClock} className="contact-form-section__note-icon" aria-hidden="true" />
            {formatMessage(messages.formResponseTime)}
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row">
              {renderField({
                id: 'name',
                name: 'name',
                labelMessage: messages.labelName,
                placeholderMessage: messages.placeholderName,
              })}
              {renderField({
                id: 'email',
                name: 'email',
                labelMessage: messages.labelEmail,
                placeholderMessage: messages.placeholderEmail,
                type: 'email',
              })}
            </div>

            {renderField({
              id: 'subject',
              name: 'subject',
              labelMessage: messages.labelSubject,
              placeholderMessage: messages.placeholderSubject,
            })}

            {renderField({
              id: 'message',
              name: 'message',
              labelMessage: messages.labelMessage,
              placeholderMessage: messages.placeholderMessage,
              multiline: true,
            })}

            <button type="submit" className="contact-form__submit" disabled={mutation.isPending}>
              <FontAwesomeIcon icon={faPaperPlane} className="contact-form__submit-icon" aria-hidden="true" />
              {formatMessage(mutation.isPending ? messages.submitButtonSubmitting : messages.submitButton)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
