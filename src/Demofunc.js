import React from 'react';
import ReactDOM from 'react-dom';
import './Demofunc.css';

const Demofunc = (props) => {
	return <div className="maindiv_style">
		<h1> Hello {props.name} </h1>
		<p> Welcome to React World </p>
		</div>
	}
export default Demofunc;