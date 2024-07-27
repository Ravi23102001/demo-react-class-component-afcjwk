import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      name: 'rr',
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);

    console.log(this, this.props);
  }

  componentDidMount() {
    console.log('This only runs when the component mounts');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('This method runs whenever the component re-renders');

    if (this.state.count !== prevState.count) {
      console.log('This runs when the count property on state changes');
    }
  }

  decrementCount() {
    this.setState((state) => ({
      count: state.count - 1,
      name: (state.name = 'Ravi'),
    }));
    console.log(this.state);
  }

  incrementCount() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <>
        {this.props.name} count: {this.state.name}
        <button
          onClick={() =>
            this.setState({ ...this.state, count: this.props.initialCount })
          }
        >
          Reset
        </button>
        {/* Use the function callback when changing a state value based on its previous value in order to guarantee that the value is accurate */}
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.incrementCount}>+</button>
      </>
    );
  }
}

Counter.defaultProps = {
  count: 0,
  name: 'demo',
};
