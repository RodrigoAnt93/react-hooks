/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React from 'react';
import { AppContext } from './contexts/App/index';
import { Div } from './Div/index';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
