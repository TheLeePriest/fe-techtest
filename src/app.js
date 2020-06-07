import React from 'react';
import ReactDOM from 'react-dom';
import NumberGrid from './components/NumberGrid/NumberGrid';

const app = function() {
  ReactDOM.render(<NumberGrid />, document.getElementById('root'))
};

export default app;
