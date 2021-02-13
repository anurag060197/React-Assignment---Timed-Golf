import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
    this.moveBall = this.moveBall.bind(this);
  }

  moveBall  (){
    if(this.state.time === 0){
      const clearSetInterval = setInterval(()=>{this.setState({time : this.state.time + 1})}, 1000);
      document.addEventListener("keydown", (event)=>{
        switch(event.keyCode){
          case 37: this.setState({x : this.state.x - 5,});
            break;
          case 38: this.setState({y : this.state.y - 5,});
            break;
          case 39: this.setState({x : this.state.x + 5,});
            break;
          case 40: this.setState({y : this.state.y + 5,});
            break;
        }
        if(this.state.x === 250 && this.state.y === 250)
          clearInterval(clearSetInterval);
      });
    }
  };

  render() {
    return (
      <>
        <div className="ball" style={{left : this.state.x, top : this.state.y}}></div>
        <div className="heading-timer">{this.state.time}</div>
        <button className="start" onClick={this.moveBall}>start</button>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
