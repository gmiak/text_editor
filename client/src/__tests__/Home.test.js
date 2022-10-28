import { render, screen } from '@testing-library/react';
import Home from '../screens/home';

test('Project description implemented', () => {
  render(<Home />);
  expect(screen.getByTestId("head"));
  expect(screen.getByTestId("about"));
  expect(screen.getByAltText("me"));
  expect(screen.getByAltText("avatar"));
});