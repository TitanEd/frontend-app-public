import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PrivacyPolicy from './PrivacyPolicy';

jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: (msgs) => msgs,
  useIntl: () => ({
    formatMessage: (descriptor) => descriptor.defaultMessage,
  }),
}));

const renderPrivacyPolicy = () => render(
  <MemoryRouter>
    <PrivacyPolicy />
  </MemoryRouter>,
);

describe('PrivacyPolicy', () => {
  it('renders hero and intro', () => {
    renderPrivacyPolicy();
    expect(screen.getByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByText('Last updated: April 21, 2026')).toBeInTheDocument();
    expect(screen.getByText(/SEARN is committed to protecting the privacy/)).toBeInTheDocument();
  });

  it('renders policy sections', () => {
    renderPrivacyPolicy();
    expect(screen.getByRole('heading', { name: /01\. Information We Collect/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /07\. Updates to This Policy/ })).toBeInTheDocument();
  });

  it('renders footer contact link', () => {
    renderPrivacyPolicy();
    expect(screen.getByRole('link', { name: 'privacy@searn-network.org' })).toHaveAttribute(
      'href',
      'mailto:privacy@searn-network.org',
    );
  });
});
