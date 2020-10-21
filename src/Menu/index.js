import React from 'react';

import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Menu = (props) => {
  return (
    <div className={styles.DrawContainer}>
      <button onClick={props.set.bind(this, 'orig')}
      className={`${styles.Button} ${(props.active=='orig')?styles.Active:null}`}>
        Origin
      </button>
      <button onClick={props.set.bind(this, 'dest')}
      className={`${styles.Button} ${(props.active=='dest')?styles.Active:null}`}>
        Destination
      </button>
      <button onClick={props.set.bind(this, 'obst')}
      className={`${styles.Button} ${(props.active=='obst')?styles.Active:null}`}>
        Obstacles
      </button>
    </div>
  );
};

Menu.propTypes = {
  set: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default Menu;