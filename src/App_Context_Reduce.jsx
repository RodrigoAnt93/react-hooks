/* eslint-disable react/react-in-jsx-scope */

import { useReducer, createContext, useContext, useRef } from 'react';
import './App.css';
import { globalState } from './contexts/App/data';
import P from 'prop-types';

// action.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

//AppContext.jsx
export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (text) => {
    dispatch({ type: actions.CHANGE_TITLE, payload: text });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const stateContext = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <input type="text" ref={inputRef} />
      <h1 onClick={() => stateContext.changeTitle(inputRef.current.value)}>
        {stateContext.state.title}
      </h1>
    </>
  );
};
// App.jsx

function App() {
  return (
    <AppContext>
      <div>
        <H1></H1>
      </div>
    </AppContext>
  );
}

export default App;
