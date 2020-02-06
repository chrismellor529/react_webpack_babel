import React from "react";

class  LoginControl extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const numbers = [1,2,3,4,5];
        let button;

        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else{
            button = <LoginButton onClick = {this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <NumberList numbers={numbers}/>
            </div>
        );
    }
}
const LoginButton = props => {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
};
const LogoutButton = props => {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
};
const Greeting = props => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
};
const UserGreeting = props => {
    return <h1>Welcome back!</h1>;
}

const GuestGreeting = props => {
    return <h1>Please sign up.</h1>;
}
const NumberList = props => {
    const numbers = props.numbers;
    const listitems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    )
    return(
        <ul>{listitems}</ul>
    )
}
export default LoginControl;