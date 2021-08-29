import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './Counter.module.css';
import { decrement, increment, incrementByAmount, selectCount } from './counterSlice';
export function Counter() {
  // recieving counter state value
  const count = useAppSelector(selectCount);
  // bringing dispatch hook
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('10');
  const incrementValue = Number(incrementAmount) || 0;
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement(incrementValue))}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment(incrementValue))}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
      </div>
    </div>
  );
}