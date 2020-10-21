import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

import Cell from '../Cell';

const Grid = () => {

  const [cells, setCells] = useState([]);

  useEffect(() => {
    const _cells = [];
    for (let i = 0; i < 22; i++) {
      const row = [];
      for (let j = 0; j < 44; j++) {
        row.push('var(--grey)');
      }
      _cells.push(row);
    }
    _cells[15][1] = "red";
    setCells(_cells);
  });

  return (
    <div className={styles.Grid}>
      {
        cells.map((row) => {
          return <div className={styles.Row}>
            { row.map((color => <Cell fill={color}/>)) }
          </div>
        })
      }
    </div>
  );
};

export default Grid;