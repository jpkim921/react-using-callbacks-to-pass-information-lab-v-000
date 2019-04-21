import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  // the color state is being held in this Matrix component.
  // the color that was selected was passed back from ColorSelector component (child) to Matrix (parent) through a callback function
  setSelectedColor = (newColor) => {
    this.setState(
      {selectedColor: newColor}
    )
  }

  // this is the additional method to grab the color so that we can pass it to the Cell component
  getSelectedColor = () => {this.state.selectedColor}


  // passing in the selectedColor method as a prop into the ColorSelector component
  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor = {this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
