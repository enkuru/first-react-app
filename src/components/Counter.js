import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {number: 0};

  decrement = () => this.setState({number: --this.state.number});

  increment = () => this.setState({number: ++this.state.number});

  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.decrement} style={{marginRight: '5px'}}>-</button>
        <button onClick={this.increment} style={{marginLeft: '5px'}}>+</button>
      </div>
    );
  }
}

export default Counter;
