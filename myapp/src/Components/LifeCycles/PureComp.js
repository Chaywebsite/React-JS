import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent{
  render() {
    console.log("Pure Component");
    return (
      <div className='container p-5'>
        <h1>PureComp</h1>
      </div>
    )
  }
}
