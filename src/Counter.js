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
			<button className="btn cart" >Add to Cart</button>
				<button className="btn" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
				<span>{this.state.count}</span>
				<button className="btn" onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
			</div>
		)
	}
}
export default Counter;