import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Democlass.css';

class Democlass extends Component{
	render(){
		return (<div className="maindiv_style">
		<h1> Hello {this.props.name} </h1>
		<p> Welcome to React World </p>
		</div>);
	}
}
export default Democlass;