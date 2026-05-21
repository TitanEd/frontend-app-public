import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Faqs from './Faqs';

/* eslint-disable react/prop-types */
jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: (msgs) => msgs,
  FormattedMessage: (props) => (
    <>
      {props.defaultMessage.split('{query}')[0]}
      {props.values?.query}
      {props.defaultMessage.includes('{contactLink}') ? props.values?.contactLink : null}
    </>
  ),
  useIntl: () => ({
    formatMessage: (descriptor) => descriptor.defaultMessage,
  }),
}));
/* eslint-enable react/prop-types */

const renderFaqs = () => render(
  <MemoryRouter>
    <Faqs />
  </MemoryRouter>,
);

describe('Faqs', () => {
  it('renders hero and FAQ categories', () => {
    renderFaqs();
    expect(screen.getByRole('heading', { level: 1, name: 'Frequently Asked Questions' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Getting Started' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Who can register on SEARN\?/ })).toBeInTheDocument();
  });

  it('filters FAQs by search query', async () => {
    const user = userEvent.setup();
    renderFaqs();

    await user.type(screen.getByLabelText('Search FAQs'), 'certificate');

    expect(screen.getByRole('heading', { name: 'Trainings & Certificates' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Getting Started' })).not.toBeInTheDocument();
  });

  it('shows empty state when search has no matches', async () => {
    const user = userEvent.setup();
    renderFaqs();

    await user.type(screen.getByLabelText('Search FAQs'), 'zzznomatch');

    expect(screen.getByText(/No questions match/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'contact us' })).toBeInTheDocument();
  });

  it('closes the previously open question when another is opened', async () => {
    const user = userEvent.setup();
    renderFaqs();

    const first = screen.getByRole('button', { name: /Who can register on SEARN\?/ });
    const second = screen.getByRole('button', { name: /Is the platform free to use\?/ });

    await user.click(first);
    expect(screen.getByText(/SEARN is open to regulators/)).toBeVisible();

    await user.click(second);
    expect(screen.queryByText(/SEARN is open to regulators/)).not.toBeVisible();
    expect(screen.getByText(/provided free of charge/)).toBeVisible();
  });

  it('expands and collapses accordion items', async () => {
    const user = userEvent.setup();
    renderFaqs();

    const trigger = screen.getByRole('button', { name: /Who can register on SEARN\?/ });
    expect(screen.queryByText(/SEARN is open to regulators/)).not.toBeVisible();

    await user.click(trigger);
    expect(screen.getByText(/SEARN is open to regulators/)).toBeVisible();

    await user.click(trigger);
    expect(screen.queryByText(/SEARN is open to regulators/)).not.toBeVisible();
  });
});
