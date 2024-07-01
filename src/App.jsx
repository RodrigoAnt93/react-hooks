/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  //componentDidUpdate - executa toda vez que o component atualiza

  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidMount - 1x
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  //Com dependências - executa quando a dependência tem mudanças.
  useEffect(() => {
    console.log('Com dependência');
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
