import React from 'react';

class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state = {count: 0};
    }
  
    add = () =>{
      this.setState({count:this.state.count+1})
      this.props.setSum(1)
    }
  
    remove = () =>{
      this.setState({count:this.state.count-1})
      this.props.setSum(-1)
    }
  
    render(){
      return (
        <div>
          <button onClick={this.add}> + </button>
          <button onClick={this.remove}> - </button>
          <span> count: {this.state.count}</span>
        </div>
      );
    }
  }

  export default Counter;