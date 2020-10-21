import React from 'react';

import Cell from '../Cell';

import styles from './styles.module.css';
import PropTypes from 'prop-types';


const Grid = (props) => {
  return (
    <div className={styles.Grid}>
      {
        props.cells.map((row, rowIdx) => {
          return <div key={rowIdx} className={styles.Row}>
            { row.map((color, cellIdx) => <Cell key={cellIdx} fill={color}/>) }
          </div>
        })
      }
    </div>
  );
};

Grid.propTypes = {
  cells: PropTypes.array.isRequired,
};

export default Grid;