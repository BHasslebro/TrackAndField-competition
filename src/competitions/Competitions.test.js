import React from 'react';
import ReactDOM from 'react-dom';
import Competitions from './Competitions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Competitions />, div);
});
