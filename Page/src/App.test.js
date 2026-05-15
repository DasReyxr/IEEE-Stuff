import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the IEEE brand', () => {
  render(<App />);
  expect(screen.getByText(/IEEE\s+UAA/i)).toBeInTheDocument();
});
