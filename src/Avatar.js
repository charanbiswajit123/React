import React from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import img from './assest/img/image.jpg';

const Avatar = (props) => {
	return (<div className="avatar_style">
		<img src={img} alt="profile" />
		<h1> {props.name} </h1>
		<p> Web Developer </p>
		</div>);
	}
export default Avatar;