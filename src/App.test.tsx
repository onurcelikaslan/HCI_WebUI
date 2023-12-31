import { render, screen } from '@testing-library/react';
import App from './App';

test('Patient Visit Information', () => {
  render(<App />);
  const linkElement = screen.getByText(/Visit Information/i);
  expect(linkElement).toBeInTheDocument();
});
