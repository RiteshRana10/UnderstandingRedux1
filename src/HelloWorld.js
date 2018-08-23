import React, { Component } from "react";

export default class HelloWorld extends Component {
    render() {
        return (<div>
            <h1>{this.props.tech}</h1>

        </div>)
    }
}