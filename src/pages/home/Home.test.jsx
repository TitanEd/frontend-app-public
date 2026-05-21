import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: (msgs) => msgs,
  useIntl: () => ({
    formatMessage: (descriptor, values) => {
      if (values?.slideNumber) {
        return `Go to slide ${values.slideNumber}`;
      }
      return descriptor.defaultMessage;
    },
  }),
}));

const renderHome = () => render(
  <MemoryRouter>
    <Home />
  </MemoryRouter>,
);

describe('Home', () => {
  it('renders the first hero slide title', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Strengthening Regulatory Expertise in Southeast Asia.',
    );
  });

  it('renders the about section', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: 'Expert-Led Courses' })).toBeInTheDocument();
  });

  it('renders the partners section', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 2, name: 'Trusted By Leading Organizations' })).toBeInTheDocument();
  });
});
