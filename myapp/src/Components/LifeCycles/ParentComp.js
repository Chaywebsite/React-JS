import React, { Component } from 'react'
import NormalComp from './NormalComp';
import PureComp from './PureComp';

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Elearn"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Enut Tech", 
            })
        },1000)
    }
  render() {
    console.log("Parent Component");
    return (
      <div className='container p-5'>
        <h1>Parent Component {this.state.name}</h1>
        <NormalComp/>
        <PureComp/>
      </div>
    )
  }
}
