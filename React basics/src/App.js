import React from 'react';
import Component3 from './Components/Component3';
import Component1 from './Components/Component1';

class App extends React.Component {
  constructor(){
    super();
  }
  render() {
    return <>
      <Component1 property="this is the property of component 1 "/>
      <Component3 />
    </>
}
}

export default App;
