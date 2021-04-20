import React, { Component, createRef } from "react";
import "../styles/App.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, clk: false, win: false , tm: createRef()};
    this.handleclick = this.handleclick.bind(this);
    this.handlekeypress = this.handlekeypress.bind(this);
  }

  handleclick(){
    this.setState({clk:true})
    document.addEventListener("keydown" , this.handlekeypress)
    var t =  setInterval(()=>{this.setState({time : this.state.time+1})} , 1000);
    this.setState({tm:t});
  }

  foo(){
    if(this.state.x == 250 && this.state.y == 250){
      clearInterval(this.state.tm)
      document.removeEventListener("keydown" ,this.handlekeypress)    
    }
    let sec = this.state.time
    return `${sec}`  
  }

  handlekeypress(e){
    switch(e.keyCode){ 
        case 37:
          this.setState({y:this.state.y -5})
          break;
        case 38:
          this.setState({x:this.state.x -5})
          break;
        case 39:
          this.setState({y: this.state.y + 5})
          break;
        case 40:
          this.setState({x:this.state.x+5})
          break;
    }
  }

  render_button_and_hole(){
    if(this.state.clk){
      return <div className="hole"></div>
    }
    else{
      return  <button className="start" onClick={this.handleclick} >start</button>
    }
  }

  render() {
    return (
      <>
        <div className="ball" style={{top:this.state.x,left :this.state.y}}></div>
        {this.render_button_and_hole()}
        <div className="heading-timer">{ this.foo()}</div>
      </>
    );
  }


  // constructor(props) {
  //   super(props);
  //   this.state = { time: 0, x: 0, y: 0 };
  //   this.moveBall = this.moveBall.bind(this);
  //   this.setup = this.setup.bind(this);
  // }
  
  // setup(event){
  //   switch(event.keyCode){
  //     case 37: this.setState({x : this.state.x - 5,});
  //       break;
  //     case 38: this.setState({y : this.state.y - 5,});
  //       break;
  //     case 39: this.setState({x : this.state.x + 5,});
  //       break;
  //     case 40: this.setState({y : this.state.y + 5,});
  //       break;
  //   }
  //   if(this.state.x === 250 && this.state.y === 250){
  //     document.removeEventListener("keydown", this.setup);
  //     this.interval();
  //   }
  // }
  // interval(){
  //   if(this.state.time === 0)
  //     clearSetInterval = setInterval(()=>{this.setState({time : this.state.time + 1})}, 1000);
  //   if(this.state.x === 250 && this.state.y === 250)
  //     clearInterval(clearSetInterval);
  // }

  // moveBall(){
  //   if(this.state.time === 0){
  //     this.interval();
  //     document.addEventListener("keydown", this.setup);
  //   }
  // };

  // render() {
  //   return (
  //     <>
  //       <div className="ball" style={{left : this.state.x, top : this.state.y}}></div>
  //       <div className="heading-timer">{this.state.time}</div>
  //       <button className="start" onClick={this.moveBall}>start</button>
  //       <div className="hole"></div>
  //     </>
  //   );
  // }
}

export default Timer;
