import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Child extends Component{
    constructor(props){
        super(props);
        this.state ={
            country: "India",
            userDetails: []
        }
    }

    componentWillReceiveProps(newProps){
        console.log("newProps", newProps);
        this.setState({
            userDetails: []
            
        }, () => {
            this.setState({
                userDetails: [...this.state.userDetails, ...newProps.userData]
            })
        })
    }


    // shouldComponentUpdate(newProps, nextState){
    //     if(newProps.length > 10){
    //         return false;
    //     }
    //     return true;
    // }


    //setState functon should not be under render, componentDidUpdate, componentWillUpdate

    componentWillUpdate(newProps, nextState){
        //console.log("componentwillupdate", newProps, nextState)
    }

    componentDidUpdate(prevProps, prevState){
        //console.log("compoenntDidupdate", prevProps, prevState);
    }

    sendDataBack(){
        this.setState({
            country: "US"
        })
        //this.props.dataFromChild(this.state.country);
    }
    render(){
        //console.log("props", this.props);
        return(
            <div>
                child component
                {this.state.userDetails.map((user, index) => {
                    return(
                        <div key={index}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.mobile}</p>

                        </div>
                        
                    );
                })}
                </div>
        );
    }
}


function mapStateToProps(state){
	return {
        userData: state.users.user
    };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Child); // export is keyword
