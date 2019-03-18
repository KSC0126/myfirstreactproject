import React, { Component } from 'react';
import task0313Json from './task0313.json';
import {Link} from 'react-router-dom';

class Task0313 extends Component {

    constructor(props){
		super(props);
		this.state = { // intializing a variable
			
			jsonData: task0313Json,
			date: new Date()
		}
	}


	tick() {   
		this.setState({
		  date: new Date()
		});
	  }
	  // These methods are called "lifecycle hooks".
	  componentDidMount() {
		console.log("Clock", "componentDidMount");
		this.timerID = setInterval(() => {
		  this.tick();
		}, 1000);
	  }
	  // These methods are called "lifecycle hooks".
	  componentWillUnmount() {
		console.log("Clock", "componentWillUnmount");
		clearInterval(this.timerID);
	  }


    render(){
        return(
            <div className="cover-design" style={{color: "red"}}>
				<div>It is {this.state.date.toLocaleTimeString()}.</div>
                <Link to="/home">Back to Home</Link>
             {this.state.jsonData.map((data, index) => {
				return(
					<div>
						<p>{data.description}</p>
					
						<img src={data.imgSrc} alt={data.description} />
						</div>
				)
			})}

            </div>
        );
    }

}

export default Task0313;