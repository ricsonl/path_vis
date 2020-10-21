import React from 'react';

import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Cell = (props) => {
  return (
    <div className={styles.Cell} style={{backgroundColor: props.fill}}></div>
  );
};

Cell.propTypes = {
  fill: PropTypes.string
};
export default Cell;