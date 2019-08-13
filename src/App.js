import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Avatar from './Avatar';
import Counter from './Counter';
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
			return (
			<div>
			<img className="app-logo" alt="logo" src="assest/img/logo.png" />
			<div className="app-container">
				<h1>Welcome to Code</h1>
				<br/><br/>
				<Avatar />
			</div>
			</div>
			)
	}
  /*
	render() {
		return (
			<div className="bodydiv">
			<div className="titlediv">
			<img className="logo" alt="logo" src={"logo.png"}/>
			<p>Don't do you...Do Nu.</p>
			</div>
			<div className="buttondiv">
        <SplashButtonOne />
			  <SplashButtonTwo />
			</div>
			<Avatar />
			</div>
		)
	} */
} 
export default App;