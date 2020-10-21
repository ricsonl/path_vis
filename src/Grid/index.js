import React from 'react';

import Cell from '../Cell';

import styles from './styles.module.css';
import PropTypes from 'prop-types';


const Grid = (props) => {
  return (
    <div className={`${styles.Grid} ${props.draw !== '' ? styles.DrawCursor : null}`}>
      {
        props.cells.map((row, rowIdx) => {
          return <div key={rowIdx} className={styles.Row}>
            { row.map((color, cellIdx) => 
              <Cell key={cellIdx}
                    fill={color}
                    clicked={props.cellClicked.bind(this, rowIdx, cellIdx)}
              />
            )}
          </div>
        })
      }
    </div>
  );
};

Grid.propTypes = {
  cells: PropTypes.array.isRequired,
  draw: PropTypes.string.isRequired,
  cellClicked: PropTypes.func.isRequired,
};

export default Grid;