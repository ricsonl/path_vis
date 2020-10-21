import React, { Component } from 'react';

import Grid from '../Grid';
import Menu from '../Menu';
import styles from './styles.module.css';

class App extends Component {

  state = {
    cells: [],
    draw: '',
  };

  componentDidMount() {
    const cells = [];
    for (let i = 0; i < 22; i++) {
      const row = [];
      for (let j = 0; j < 44; j++) {
        row.push('var(--grey)');
      }
      cells.push(row);
    }
    this.setState({ cells });
  }

  setDraw = (draw) => {
    (this.state.draw === draw) ?
    this.setState({ draw: '' }) :
    this.setState({ draw });
  }
  
  render() {
    return (
      <div className={styles.AppContainer}>
        <Grid cells={this.state.cells} />
        <Menu set={this.setDraw} active={this.state.draw}/>
      </div>
    );
  }
}

export default App;
