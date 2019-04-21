import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }


  // getSelectedColor was passed in from the parent (Matrix) as a prop
  handleClick = () => {
    const newColor = this.props.getSelectedColor();
    this.setState({
      color: newColor
    })
  }


  render() {
    return (
      <div className="cell"
          style={{backgroundColor: this.state.color}}
          onClick={this.handleClick}>
      </div>
    )
  }

}
