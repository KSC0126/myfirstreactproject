import React, { Component } from 'react';

import './App.css';
import Child from './Child';
import Form from './form';
import {Link} from 'react-router-dom';
import sampleJson from './sample.json';
import Task0313 from './task0313';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendDataToAction} from './actions/index';

class App extends Component {
	constructor(props){
		super(props);
		this.state = { // intializing a variable
			name: "",
			email:"",
			mobile:"",
			user: {},
			userList: [],
			jsonData: sampleJson,
			date: new Date()
		}
	}


	receivedData(data){
		console.log("@@@@", data)
	}

	// changeName(event){
	// 	console.log("initial value", this.state.name);
	// 	this.setState({
	// 		name: event.target.value
	// 	}, () => {
	// 		console.log(this.state.name);
	// 	})
	// }


	// getName(event){
	// 	console.log(event.target.value);
	// 	this.setState({
	// 		name: event.target.value
	// 	}, () => {
	// 		console.log(this.state.name)
	// 	})
	// }
	getName(event){
		console.log(event.target.value);
		this.setState({
			name: event.target.value
		}, () => {
			console.log(this.state.name)
		 });
		}

	getEmail(event){
		console.log(event.target.value);
		this.setState({
			email: event.target.value
		}, () => {
			console.log(this.state.name)
		 });
		}

	getMobile(event){
		console.log(event.target.value);
		this.setState({
			mobile: event.target.value
		}, () => {
			console.log(this.state.name)
		 });
	}


	registerUser(e){
		e.preventDefault(); //stop the browser from refreshing
		this.state.user['name'] = this.state.name;
		this.state.user['email'] = this.state.email;
		this.state.user['mobile'] = this.state.mobile;
		this.setState({
			user: this.state.user
		}, () => {
			this.props.sendDataToAction(this.state.user);
			this.state.userList.push(this.state.user);
			this.setState({
				userList: this.state.userList
			}, () => {
				this.setState({
					name: "",
					mobile: "",
					email: "",
					user: {}
				})
			})
		})
	}
	
	render() {
		//alert("render")
    return (
      <div className="App">
	  {/* <h1>{this.state.name}</h1> */}
	  
		{/* <input type="text" onChange={this.getName.bind(this)} /> */}
		

		<form onSubmit={this.registerUser.bind(this)}>
				<input type="text" value={this.state.name}  onChange={this.getName.bind(this)}/>
				<input type="text" value={this.state.email} onChange={this.getEmail.bind(this)}/>
				<input type="text" value={this.state.mobile} onChange={this.getMobile.bind(this)}/>
				<button type="submit">Register</button>
		</form>
		<Child />

		{/* <button onClick={this.changeName.bind(this)}>CHange</button> */}
		
			

      </div>
    );
  }
}

function mapStateToProps(state){
	return {};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({sendDataToAction: sendDataToAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // export is keyword




// 1.create 3 text fields name, emial, mobile and button submit
// 2.store all the 3 text fields values inside an object.getName
// 3.send object to child Component.
// 4.display the object values in child



{/* <Child  userList={this.state.userList} 
			name={this.state.name}
			dataFromChild={this.receivedData} />
			<Link to="/form">Go to form</Link>
			<br/>
			<Link to="/task0313">Go to TASK0103</Link>
			{this.state.jsonData.map((data, index) => {
				return(
					<div>
						<p>{data.name}</p>
						<p>{data.id}</p>
						</div>
				)
			})}
           <Task0313/> */}