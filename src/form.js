import React, { Component } from 'react';
import FormChild from './formChild';
import {Link} from 'react-router-dom';
import { callbackify } from 'util';




class Form extends Component {

    constructor(props){
		super(props);
		this.state = { // intializing a variable
			name: "",
			phone:"",
            email:"",
            comment:"",
			person: {},
			personList: []	
		}
    }
    registerPerson(e){
		e.preventDefault(); //stop the browser from refreshing
		this.state.person['name'] = this.state.name;
		this.state.person['phone'] = this.state.phone;
		this.state.person['email'] = this.state.email;
		this.state.person['comment'] = this.state.comment;
		this.setState({
			person: this.state.person
		}, () => {
			this.state.personList.push(this.state.person);
			this.setState({
				personList: this.state.personList
			}, () => {
				this.setState({
					name: "",
					phone: "",
					email: "",
					comment: "",
					person: {}
				})
			})
        })
        //this.props.history.push('/form');
    }
    getName(event){
		console.log(event.target.value);
		this.setState({
			name: event.target.value
		}, () => {
			
         });
        }
        getPhone(event) {
            this.setState({
                phone: event.target.value
            }, () => {
                
             });
        }
        getEmail(event){
            this.setState({
                email: event.target.value
            }, () => {
                
             });
        }
        getComment(event){
            this.setState({
                comment: event.target.value
            }, () => {
                
             });
        }
    render(){
      return(
          <div className="form"> 
          
         <form onSubmit={this.registerPerson.bind(this)}> 
         <div>name</div>
         <input type="text" value={this.state.name} onChange={this.getName.bind(this)}/>
         <div>phone</div>
         <input type="text" value={this.state.phone} onChange={this.getPhone.bind(this)} />
         <div>email</div>
         <input type="text" value={this.state.email} onChange={this.getEmail.bind(this)} />
         <div>comments</div>
         <input type="text" value={this.state.comment} onChange={this.getComment.bind(this)} />
         <button type="submit">Register</button>

         </form>

         <FormChild  personList={this.state.personList} 
			/>

        <Link to="/home">Back to Home</Link>
          
          </div>
      );
    }
}

export default Form;