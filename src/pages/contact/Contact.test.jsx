import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ToastProvider } from '../../components/toast/ToastContext';
import Contact from './Contact';

jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: (msgs) => msgs,
  FormattedMessage: ({ defaultMessage, values }) => {
    if (!values) {
      return defaultMessage;
    }
    return defaultMessage.replace('{email}', values.email);
  },
  useIntl: () => ({
    formatMessage: (descriptor, values) => {
      if (values?.fieldLabel) {
        return `${values.fieldLabel} is required`;
      }
      return descriptor.defaultMessage;
    },
  }),
}));

const mockPost = jest.fn();
jest.mock('@edx/frontend-platform/auth', () => ({
  getAuthenticatedHttpClient: () => ({ post: mockPost }),
}));

const renderContact = () => {
  const queryClient = new QueryClient();
  return render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Contact />
        </ToastProvider>
      </QueryClientProvider>
    </MemoryRouter>,
  );
};

const fillValidForm = async (user) => {
  await user.type(screen.getByLabelText('Full Name'), 'Jane Doe');
  await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
  await user.type(screen.getByLabelText('Subject'), 'Partnership');
  await user.type(screen.getByLabelText('Message'), 'Hello team.');
};

describe('Contact', () => {
  beforeEach(() => {
    mockPost.mockReset();
  });

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

  it('shows the success view after a valid submit', async () => {
    mockPost.mockResolvedValueOnce({
      data: { message: 'Thank you for contacting us. We will get back to you soon.', results: { id: 1 } },
    });
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(await screen.findByRole('heading', { name: 'Message sent!' })).toBeInTheDocument();
    expect(mockPost).toHaveBeenCalledWith(
      expect.stringContaining('/api/v1/contact-us/'),
      expect.objectContaining({
        name: 'Jane Doe',
        email: 'jane@example.com',
        subject: 'Partnership',
        message: 'Hello team.',
      }),
    );
  });

  it('shows an error toast and stays on the form when submission fails', async () => {
    mockPost.mockRejectedValueOnce({
      response: { data: { detail: 'name, email fields are invalid or missing.' } },
    });
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(await screen.findByText('name, email fields are invalid or missing.')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Message sent!' })).not.toBeInTheDocument();
  });
});
