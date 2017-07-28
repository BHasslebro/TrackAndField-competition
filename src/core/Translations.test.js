import React from 'react';
import ReactDOM from 'react-dom';
import Translations from './Translations';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Translations translationKey="dummy" module="dummy" />, div);
});
