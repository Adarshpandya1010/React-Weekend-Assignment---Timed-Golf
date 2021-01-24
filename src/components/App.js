import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, started: false };
    this.timeInterval = null;
    this.gamestart = this.gamestart.bind(this);
    this.keyListener = this.keyListener.bind(this);

  }

  keyListener(evt) {
   
    if (this.state.started) {
    //  console.log('key listener ',this.state.started)
      if (evt.keyCode === 37) {
        this.setState({ x: this.state.x - 5 });
      } else if (evt.keyCode === 38) {
        this.setState({ y: this.state.y - 5 });
      } else if (evt.keyCode === 39) {
        this.setState({ x: this.state.x + 5 });
      } else if (evt.keyCode === 40) {
        this.setState({ y: this.state.y + 5 });
      }
    }
  }

  componentDidMount() {}

  componentDidUpdate(){
  if(this.state.x === 250 && this.state.y === 250){
    clearInterval(this.timeInterval);
    document.removeEventListener('keydown',this.keyListener)
  }
}

  componentWillUnmount() {}

  gamestart() {
    this.setState({
      started: true,
    });
    this.timeInterval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1 * 1000);

    document.addEventListener("keydown", this.keyListener);
  }

  render() {
    return (
      <>
        {!this.state.started ? (
          <button className="start" onClick={this.gamestart}>
            start
          </button>
        ) : (
          <>
            <div className="ball" style={{ left: this.state.x + 'px', top:this.state.y + 'px' }}></div>
            <div className="hole" style={{ left: 250 + 'px', top: 250 + 'px' }}></div>
            <div className="heading-timer">{this.state.time}</div>
          </>
        )}
      </>
    );
  }
}

export default Timer;
