import {render, screen} from '@testing-library/react';

import Button from './Button';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Button {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
}

<div>
  <button
    class="c0"
  />
</div>
`);
});

// describe('Props work as intended', () => {
//   test('testProp', () => {
//     render(<Button testProp data-testid="Button" />);
//     expect(screen.getByTestId('Button')).toHaveStyle(
//       `display: inline-block`,
//     );
//   });
// });
