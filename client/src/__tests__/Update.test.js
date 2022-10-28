import { render, screen } from '@testing-library/react';
import Update from '../screens/update';

test('Save button implemented', () => {
  render(<Update />);
  expect(screen.getByRole("button", { name: "Save" }));
});