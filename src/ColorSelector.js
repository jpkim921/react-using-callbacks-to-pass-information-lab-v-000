import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // makeColorSwatches = () => (
  //   ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
  //     return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
  //   })
  // )
  makeColorSwatches = () => (

    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const callbackFunction = () => {this.props.setSelectedColor(str)}
      
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={callbackFunction}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
