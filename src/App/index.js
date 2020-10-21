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

  cellClicked = (i, j) => {
    let _cells = [...this.state.cells];
    let color;
    switch(this.state.draw){
      case 'orig':
        color = 'var(--blue)';
        break;
      case 'dest':
        color = 'var(--purple)';
        break;
      case 'obst':
        color = 'var(--black)';
        break;
      default:
        color = 'var(--grey)';
        break;
    }
    _cells[i][j] = color;
    this.setState({cells: _cells});
  }

  setDraw = (draw) => {
    (this.state.draw === draw) ?
    this.setState({ draw: '' }) :
    this.setState({ draw });
  }
  
  render() {
    return (
      <div className={styles.AppContainer}>
        <Grid cells={this.state.cells} draw={this.state.draw} cellClicked={this.cellClicked}/>
        <Menu set={this.setDraw} active={this.state.draw}/>
      </div>
    );
  }
}

export default App;
