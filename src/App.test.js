import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const header = screen.getByText("Finacial Transaction App (2019)");
  expect(header).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});