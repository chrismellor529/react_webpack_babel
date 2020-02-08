import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import Clock from "../presentational/Clock.jsx";
import Toggle from "../presentational/Toggle.jsx";
import LoginControl from "../presentational/LoginControl.jsx";
import NameForm from "../presentational/NameForm.jsx";
import EssayForm from "../presentational/EssayForm.jsx";
import FlavorFrom from "../presentational/FlavorFrom.jsx";
import Reservation from "../presentational/Reservation.jsx";
class FormContainer extends Component{
        constructor() {
            super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
            this.setState({ [event.target.id]: event.target.value });
    }
    render() {
            const {seo_title} = this.state;
        return (
            <div>

                <form id="article-form">
                    <Input
                        text="SEO title"
                        label="seo_title"
                        type="text"
                        id="seo_title"
                        value={seo_title}
                        handleChange={this.handleChange}
                        />
                </form>
                <Clock />
                <Toggle />
                <LoginControl />
                <NameForm/>
                <EssayForm/>
                <FlavorFrom />
                <Reservation />
            </div>
        );
    }

}

export default FormContainer;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;