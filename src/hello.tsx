//import * as React from 'react'
import React from 'react'

class Hello extends React.Component {
  render() {
    return <div>
      <h1>Hello React</h1>
      <ul>
        <li>{true}</li>
        <li>{false}</li>
        <li>{true && <div>TRUE</div>}</li>
        <li>{false && <div>FALSE</div>}</li>
      </ul>
    </div>
  }
}

export default Hello
