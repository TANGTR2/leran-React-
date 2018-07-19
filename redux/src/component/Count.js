import React, { Component } from 'react';

export default class Count extends Component {

  constructor(props) {
    super(props);
    this.inputText = React.createRef();
    // this.incrementAsync = this.incrementAsync.bind(this);
  }

  multiper =() =>{
    const multipile = this.inputText.current.value;
    const onMultiplication = this.props.onMultiplication;
    onMultiplication(this.props.index,multipile);
  }
  incrementAsync =() =>{
    const onIncrement = this.props.onIncrement;
    setTimeout(()=>{ onIncrement(this.props.index,1)},1000);
  }

  render() {
    const { value, onIncrement, onDecrement, index} = this.props;
    return (
    <p>
      Clicked: {value} times {' '}
      <button onClick={()=>onIncrement(index)}> + </button>
      <button onClick={()=>onDecrement(index)}> - </button>
      <input type = "text" defaultValue = {0} ref = {this.inputText}/>  
      <button onClick={this.multiper}> x </button> 
      <button onClick={this.incrementAsync}> Increment async </button>
    </p >
    );
  }
}