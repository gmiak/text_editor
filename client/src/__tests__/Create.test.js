import { render, screen } from '@testing-library/react';
import Create from '../screens/create';

test('Add button is implemented', () => {
  render(<Create />);
  expect(screen.getByRole("button", { name: "Add" }));
});