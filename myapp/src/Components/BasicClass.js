import React, { Component } from "react";

class BasicClass extends Component{
    render(){
        return <h1>Welcome to {this.props.name} {this.props.role}</h1>
    }
}

export default BasicClass;