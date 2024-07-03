import React, { useState } from 'react';
import { globalState } from './data';

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [context, setContext] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ context, setContext }}>
      {children}
    </GlobalContext.Provider>
  );
};
