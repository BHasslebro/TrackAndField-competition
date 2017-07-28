import React from 'react';
import ReactDOM from 'react-dom';
import FirebaseStart from './FirebaseStart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirebaseStart />, div);
});
