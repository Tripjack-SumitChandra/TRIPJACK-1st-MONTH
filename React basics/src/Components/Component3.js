import React from 'react'
import Component2 from './Component2';
import '../css/Component3.css'

class Component3 extends React.Component{
    constructor(){
        console.log('Constructor of C3 called  .......')
        super();
        this.state = {
            counter : 0,
        }
        this.IncreaseCounter = this.IncreaseCounter.bind(this) //bind thew function if you want to use state or props in it 
    }
    IncreaseCounter = () =>{
        console.log('IncreaseCounter called  .......')
        this.setState({counter: this.state.counter+1});
    }
    render(){
        console.log('Render of C3 called .......')
        return <>
                <div className='c3__div'>
                <h1>Component3</h1>
                <h1>Count : {this.state.counter}</h1>
                <button onClick={this.IncreaseCounter}>Increment</button>
                <Component2 counter_prop={this.state.counter}/>
                </div>
            </>
    }
    componentDidMount() {
        console.log('C3 ComponentDidMount called ....')
    }
}

export default Component3