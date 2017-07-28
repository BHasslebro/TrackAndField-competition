import React from 'react';
import ReactDOM from 'react-dom';
import CompetitionsNew from './CompetitionsNew';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompetitionsNew />, div);
});
