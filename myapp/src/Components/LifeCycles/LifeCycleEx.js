import React, { Component } from 'react'

export default class LifeCycleEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Suresh",
      };
      console.log("constructor");
    }
   changename =()=>{
    this.setState({
        name:"Ramesh"
    })
   };
   shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
   }
   getSnapshotBeforeUpdate(preProp, preState){
    console.log("getSnapshotBeforeUpdate: " + preState.name);
    return null;
   }
   componentDidUpdate(){
    console.log('componentDidUpdate', this.state.name);
   }
   componentDidMount(){
    console.log("componentDidMount");
   }
   static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps");
        return null;
   }
  render() {
    console.log("render");
    return (
      <div className='container p-5'>
        <h1 className='text-start'>Welcome {this.state.name}</h1>
        <button onClick={this.changename}>Click</button>
    </div>
    )
  }
}
