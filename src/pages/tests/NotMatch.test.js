/* eslint-disable jsx-quotes */
import React from 'react';
import renderer from 'react-test-renderer';
// import { BrowserRouter as Router } from 'react-router-dom';
import NotMatch from '../NotMatch';

it('should display the home page content 1', () => {
  const tree = renderer.create(<NotMatch />).toJSON();
  expect(tree).toMatchSnapshot();
});
