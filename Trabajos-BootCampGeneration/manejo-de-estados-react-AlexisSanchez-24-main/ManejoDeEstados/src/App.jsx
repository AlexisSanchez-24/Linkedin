import { useState } from 'react';
import './App.css'; 

function App() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="counter">Contador: {count}</h1>
      <button className="btn increment-btn" onClick={incrementCount}>
        Incrementar
      </button>
      <button className="btn decrement-btn" onClick={decrementCount}>
        Decrementar
      </button>
    </div>
  );
}

export default App;
