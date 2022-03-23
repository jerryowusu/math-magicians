/* eslint-disable jsx-quotes */
import React from 'react';
import renderer from 'react-test-renderer';
// import { BrowserRouter as Router } from 'react-router-dom';
import Quotes from '../Quote';

it('should display the home page content 1', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
