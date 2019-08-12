import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Counter.css';
class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 }
	}
	render(){
		return (
		  <div className="counter">
			<h1>{this.state.count}</h1>   
			<button className="btn" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
			<button className="btn" onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
		  </div>
		)
	}
}
export default Counter;