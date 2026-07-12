import { render, screen } from '@testing-library/react';
import App from './App';

test('renders developer name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Kanishkar R/i);
  expect(nameElement).toBeInTheDocument();
});
