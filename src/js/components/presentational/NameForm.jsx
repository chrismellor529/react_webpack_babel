import React from "react";

class NameForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handlChange = this.handlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlChange(event){
        this.setState({value: event.target.value.toUpperCase()});
    }
    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handlChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameForm;