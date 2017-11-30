import React from 'react';
import { render } from 'react-dom';
import Main from './containers/index';

export default () => {
  render(< Main />, document.getElementById('content'));
}