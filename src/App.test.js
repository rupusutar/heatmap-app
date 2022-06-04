import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const header = screen.getByText("Finacial Transaction App (2019)");
  expect(header).toBeInTheDocument();
});
