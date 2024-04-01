import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {

  const [number, setNumber] = useState(0)
  const {counter, showCounter} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const handleIncreaseByNumber = () => {
    dispatch(counterActions.increase(Number(number)))
  }

  const handleOnIncrement = () => {
    dispatch(counterActions.increment())
  }
  const handleOnDecrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (    
        <div className={classes.value}>{counter}</div>
      )}
      <div>
          <button onClick={handleOnIncrement}>Increment</button>
          <button onClick={handleOnDecrement}>Decrement</button>
        </div>
        <div>
          <input value={number} onChange={event => setNumber(event.target.value)}/>
          <button onClick={handleIncreaseByNumber}> Sum </button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
