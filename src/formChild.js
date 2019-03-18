import React, {Component} from 'react';


class FormChild extends Component{
    render(){
        console.log("props", this.props);
        return(

            <div>
            
            child component
                {this.props.personList.map((person, index) => {
                    return(
                        <div key={index}>
                            <p>{person.name}</p>
                            <p>{person.phone}</p>
                            <p>{person.email}</p>
                            <p>{person.comment}</p>

                        </div>
                        
                    );
                })}
            </div>
        );

    }
}
export default FormChild;