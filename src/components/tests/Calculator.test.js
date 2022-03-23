import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('Calculator component is working fine', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
