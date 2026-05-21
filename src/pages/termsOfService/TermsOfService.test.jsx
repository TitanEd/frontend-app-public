import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TermsOfService from './TermsOfService';

jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: (msgs) => msgs,
  useIntl: () => ({
    formatMessage: (descriptor) => descriptor.defaultMessage,
  }),
}));

const renderTermsOfService = () => render(
  <MemoryRouter>
    <TermsOfService />
  </MemoryRouter>,
);

describe('TermsOfService', () => {
  it('renders hero and intro', () => {
    renderTermsOfService();
    expect(screen.getByRole('heading', { level: 1, name: 'Terms of Service' })).toBeInTheDocument();
    expect(screen.getByText('Last updated: April 21, 2026')).toBeInTheDocument();
    expect(screen.getByText(/These Terms of Service govern your use/)).toBeInTheDocument();
  });

  it('renders all policy sections', () => {
    renderTermsOfService();
    expect(screen.getByRole('heading', { name: /01\. Acceptance of Terms/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /09\. Governing Law/ })).toBeInTheDocument();
  });

  it('renders footer legal contact link', () => {
    renderTermsOfService();
    expect(screen.getByRole('link', { name: 'legal@searn-network.org' })).toHaveAttribute(
      'href',
      'mailto:legal@searn-network.org',
    );
  });
});
