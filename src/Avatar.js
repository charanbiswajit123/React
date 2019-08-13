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
		let data = { "results": [{
				"id": "1",
				"cover": "assest/img/businessadventures.jpg",
				"title": "Business Adventures",
				"price": "204",
				"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"id": "2",
				"cover": "assest/img/dollar100startup.jpg",
				"title": "The 7 Habits of Highly",
				"price": "204",
				"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"id": "3",
				"cover": "assest/img/elonmusk.jpg",
				"title": "Elon Musk",
				"price": "204",
				"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"id": "4",
				"cover": "assest/img/eloquentjs.jpg",
				"title": "The $100 Startup",
				"price": "204",
				"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"id": "5",
				"cover": "assest/img/javascriptgoodparts.jpg",
				"title": "Steve Jobs",
				"price": "204",
				"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"id": "6",
				"cover": "assest/img/learnreact.jpg",
				"title": "JavaScript: The Good Parts",
				"price": "204",
				"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"id": "7",
				"cover": "assest/img/sevenhabitsofhighlyeffectivepeople.jpg",
				"title": "Eloquent JavaScript",
				"price": "204",
				"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"id": "8",
				"cover": "assest/img/stevejobs.jpg",
				"title": "Learning React: Functional",
				"price": "204",
				"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			}]
		}
		//fetch('https://randomuser.me/api/?results=12')
		//  .then(results => {
		//	 return results.json();
		//  })
		//  .then(data => {
		let details = data.results.map((item, index) => {
		  return (
			<div key={index} className="col-sm-3" style={divStyle}>
				<div className="avatar-style">
					<img src={item.cover} />
					<h4 className="title">{item.title}</h4>
					<p className="avatar-price-style">Rs. {item.price}</p>
					<p className="avatar-desc-style">{item.description}</p>
					<Counter />
				</div>
			</div>
		  )
		})
		this.setState({statedata: details});
		//console.log("state", this.state.pictures);
		//})
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