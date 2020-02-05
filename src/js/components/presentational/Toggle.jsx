import React from "react";

class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <button onClick={this.handleCheck}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Toggle;