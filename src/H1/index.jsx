import { useContext } from 'react';
import { GlobalContext } from '../contexts/App/index';

// eslint-disable-next-line
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    context: { title, counter },
  } = theContext;

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <h1>
      {title} {counter}
    </h1>
  );
};
