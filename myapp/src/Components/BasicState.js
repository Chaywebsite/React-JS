import React, { Component } from 'react'

export default class BasicState extends Component {
    constructor(){
        super()
        this.state = {
            name: "Elearn",
            counter: 0 ,
        }
    }
    updateState =()=>{
        //alert("Working")
        this.setState  ({
            name:"Enut Technologies",
        })
    }
    Resetname = () =>{
        this.setState ({
            name: "Elearn"
        })
    }
    updateCounter =()=>{
        this.setState ({
            counter: this.state.counter + 1
        })
    }
    decreaseCounter = () =>{
        this.setState ({
            counter: this.state.counter - 1
        })
    }
    ResetCounter = () =>{
        this.setState({
            counter:0
        })
    }
  render() {
    return (
      <div>
        <h1>Welcome to {this.state.name}</h1>
        <button onClick={this.updateState}>Click</button>
        <button onClick={this.Resetname}>Reset</button>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.updateCounter}>Add</button>
        <button onClick={this.decreaseCounter}>Sub</button>
        <button onClick={this.ResetCounter}>Reset</button>
      </div>
    )
  }
}
