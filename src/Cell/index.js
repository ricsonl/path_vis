import React from 'react';

import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useEffect } from 'react';

const Cell = (props) => {
  useEffect(()=>{
    console.log('updated')
  })
  return (
    <div className={`${styles.Cell}`}
         style={{backgroundColor: props.fill}}
         onClick={props.clicked}></div>
  );
};

Cell.propTypes = {
  fill: PropTypes.string,
  clicked: PropTypes.func.isRequired,
};

export default React.memo(Cell, (prevProps, nextProps) => {
  return prevProps.fill === nextProps.fill;
});