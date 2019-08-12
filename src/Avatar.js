import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './Avatar.css';
const divStyle = {
	marginBottom: '50px'
};
class Avatar extends Component {
	constructor(props) {
		super(props);
		this.state = { statedata: [] };
	}
	componentDidMount() {
		fetch('https://randomuser.me/api/?results=12')
		  .then(results => {
			 return results.json();
		  })
		  .then(data => {
		  let details = data.results.map((item, index) => {
		  return (
			<div key={index} className="col-sm-4" style={divStyle}>
				<div className="avatar-style">
					<img src={item.picture.large} />
					<h4 className="title">Name : {item.name.title}. {item.name.first} {item.name.last}</h4>
					<p>Gender : {item.gender}</p>
					<p>Date of Birth : {item.dob.date}</p>
					<p>Age : {item.dob.age}</p>
					<p>Email : {item.email}</p>
					<p>Phone : {item.phone}</p>
					<p>Location : {item.location.city}</p>
					Add to Cart : <Counter />
				</div>
			</div>
		  )
		  })
		  this.setState({statedata: details});
		  //console.log("state", this.state.pictures);
		  })
	}
	  
	render() {
		  return (
			<div className="container">
				<div className="row">					
					{this.state.statedata}					
				</div>
			</div>
		  )
	}
} 
export default Avatar;