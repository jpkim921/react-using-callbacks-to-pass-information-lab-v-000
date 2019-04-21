import React, { Component } from 'react';

export default class ColorSelector extends Component {


  makeColorSwatches = () => (

    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const callbackFunction = () => {this.props.setSelectedColor(str)}
      // const cellColor = () => {this.props.colorSelected(str)}
      return <div key={idx} onClick={callbackFunction} className="color-swatch" style={{backgroundColor: str}} />
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
