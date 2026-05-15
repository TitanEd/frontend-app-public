import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import About from './About';

jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: (msgs) => msgs,
  useIntl: () => ({
    formatMessage: (descriptor) => descriptor.defaultMessage,
  }),
}));

const renderAbout = () => render(
  <MemoryRouter>
    <About />
  </MemoryRouter>,
);

describe('About', () => {
  it('renders the hero title with highlighted word', () => {
    renderAbout();
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Building Regulatory Capacity,');
    expect(title).toHaveTextContent('Together');
  });

  it('renders value cards', () => {
    renderAbout();
    expect(screen.getByRole('heading', { name: 'Mission-Driven' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Visionary' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Collaborative' })).toBeInTheDocument();
  });

  it('renders stats and story section', () => {
    renderAbout();
    expect(screen.getByText('5,000+')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Our Story' })).toBeInTheDocument();
  });
});
