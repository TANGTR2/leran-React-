import React, { Component } from 'react';

import CountGroup from './component/CountGroup';

class App extends Component {

  render() {
    return(
    <div className="App">
      <CountGroup num = {2}/>
    </div>
    )  
  }
}

export default App;
