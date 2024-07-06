import React, { Component } from 'react'

export default class NormalComp extends Component {
  render() {
    console.log("Normal Component");
    return (
      <div className='container p-5'>
        <h1>NormalComp</h1>
      </div>
    )
  }
}
