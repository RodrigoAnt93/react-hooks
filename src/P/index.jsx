/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { GlobalContext } from '../contexts/App/index';

export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    context: { body, counter },
    context,
    setContext,
  } = theContext;

  const handleClick = (e) => {
    e.preventDefault();
    setContext({ ...context, counter: counter + 1 });
  };

  return (
    <>
      <p>{body}</p>
      <button type="submit" onClick={(e) => handleClick(e)}>
        Click
      </button>
    </>
  );
};
