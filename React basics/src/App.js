import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      surname : "chandra", 
    }
  }
  render() {
    return(
    <>
      <h1>Name is displaying using props and Surname by using State.</h1>
      <h2>Hi {this.props.name} {this.state.surname}</h2>
    </>
    )}
}

class About extends React.Component {
  render(){
    return <p>This is the about class</p>
  }
}

export {App, About}
