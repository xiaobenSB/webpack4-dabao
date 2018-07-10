import React, { Component } from 'react'
import Clock from "./view/clock.js";
import Clock2 from "./view/clock-2.jsx";
import Jia from "./view/jiaorjian.jsx";
require('./index.css');
class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {

    return (
     <div id="contion">
	    <Clock />
		<Clock2 />
		<Jia />
      </div>      
    )
  }
}


export default Counter