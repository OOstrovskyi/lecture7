
import React, { Component } from "react";
//import "./gallery.css";

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin: false,
            buttonText: ['Login', 'Logout'],
            hiText: ['You are not logged in', 'You are logged in'],
        }

    }

    changeLoginState = () => {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin
        }));
    }

    render() {   
        const isLogin = this.state.isLogin;
        return (
            <div>
                <h1>Topic: Lifecycle Methods - Mostly Used Methods Demo</h1>
                <p>{this.state.hiText[isLogin ? 1 : 0]}</p>
                
                <button onClick={this.changeLoginState}>
                    {this.state.buttonText[isLogin ? 1 : 0]}
                </button>
            </div>
        )
    }
}