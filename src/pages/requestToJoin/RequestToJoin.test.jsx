import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { ToastProvider } from '../../components/toast/ToastContext';
import RequestToJoin from './RequestToJoin';

jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: (msgs) => msgs,
  FormattedMessage: ({ defaultMessage, values }) => {
    if (!values) {
      return defaultMessage;
    }
    return defaultMessage
      .replace('{email}', values.email)
      .replace('{contactLink}', values.contactLink);
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

const renderRequestToJoin = () => render(
  <MemoryRouter>
    <ToastProvider>
      <RequestToJoin />
    </ToastProvider>
  </MemoryRouter>,
);

describe('RequestToJoin', () => {
  it('renders hero and form fields', () => {
    renderRequestToJoin();
    expect(screen.getByRole('heading', { level: 1, name: 'Request to Join the SEARN Network' })).toBeInTheDocument();
    expect(screen.getByLabelText(/Organisation Name/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit Request' })).toBeInTheDocument();
  });

  it('disables country until applicant type is selected', () => {
    renderRequestToJoin();
    expect(screen.getByLabelText(/Country/)).toBeDisabled();
  });

  it('allows toggling applicant type off', async () => {
    const user = userEvent.setup();
    renderRequestToJoin();

    const nraRadio = screen.getByLabelText(/National Regulatory Authority/);
    await user.click(nraRadio);
    expect(nraRadio).toBeChecked();
    expect(screen.getByLabelText(/Country/)).toBeEnabled();

    await user.click(nraRadio);
    expect(nraRadio).not.toBeChecked();
    expect(screen.getByLabelText(/Country/)).toBeDisabled();
  });

  it('shows validation errors and toast when submitting empty form', async () => {
    const user = userEvent.setup();
    renderRequestToJoin();

    await user.click(screen.getByRole('button', { name: 'Submit Request' }));

    expect(await screen.findByText('Applicant Type required')).toBeInTheDocument();
    expect(screen.getByText('Applicant Type is required')).toBeInTheDocument();
  });

  it('shows success state after valid submission', async () => {
    const user = userEvent.setup();
    renderRequestToJoin();

    await user.click(screen.getByLabelText(/National Regulatory Authority/));
    await user.type(screen.getByLabelText(/Organisation Name/), 'Test Org');
    await user.selectOptions(screen.getByLabelText(/Country/), 'India');
    await user.type(screen.getByLabelText(/Official Website URL/), 'https://example.org');
    await user.type(screen.getByLabelText(/Primary Contact Name/), 'Jane Doe');
    await user.type(screen.getByLabelText(/Primary Contact Email/), 'jane@example.com');
    await user.type(screen.getByLabelText(/Brief Description of Organisation/), 'Description text.');
    await user.click(screen.getByRole('button', { name: 'Submit Request' }));

    expect(await screen.findByRole('heading', { name: 'Thank you for your interest in joining the SEARN Network.' })).toBeInTheDocument();
  });
});
