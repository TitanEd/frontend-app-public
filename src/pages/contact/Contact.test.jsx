import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { ToastProvider } from '../../components/toast/ToastContext';
import Contact from './Contact';

jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: (msgs) => msgs,
  useIntl: () => ({
    formatMessage: (descriptor, values) => {
      if (values?.fieldLabel) {
        return `${values.fieldLabel} is required`;
      }
      return descriptor.defaultMessage;
    },
  }),
}));

const renderContact = () => render(
  <MemoryRouter>
    <ToastProvider>
      <Contact />
    </ToastProvider>
  </MemoryRouter>,
);

describe('Contact', () => {
  it('renders hero and channel cards', () => {
    renderContact();
    expect(screen.getByRole('heading', { level: 1, name: 'Let\'s Start a Conversation' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Office' })).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    renderContact();
    expect(screen.getByRole('heading', { level: 2, name: 'Send us a message' })).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    renderContact();

    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(screen.getByText('Full Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email Address is required')).toBeInTheDocument();
    expect(screen.getByText('Subject is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('shows success toast after valid submit', async () => {
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText('Full Name'), 'Jane Doe');
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
    await user.type(screen.getByLabelText('Subject'), 'Partnership');
    await user.type(screen.getByLabelText('Message'), 'Hello team.');
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(await screen.findByText('Message sent!')).toBeInTheDocument();
    expect(screen.getByText('We\'ll get back to you within 2 business days.')).toBeInTheDocument();
  });
});
