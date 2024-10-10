import React from "react";
import '../css/Component2.css'

class Component2 extends React.Component{
    constructor(props){
        console.log('Constructor of component2 is called ...')
        super(props);
        this.state = {
            c2_state:"This is from Component2 State",
            c2_counter : this.props.counter_prop
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log('GetDerivedStateFromProps called ......')
        if(state.c2_counter !== props.counter_prop){
            return {c2_counter : props.counter_prop}
        }
        else{
            return null;
        }
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called ...')
        console.log("props" , this.props)
        console.log("state" , this.state)
        return true;
    }
    render(){
        console.log('Render of component2 is called ...')
        return <>
            <div className="c2__div">
            <h1>This is component 2</h1>
            <h1>{this.state.c2_state}</h1>
            <div>
                <h1>[Component2] =  {this.state.c2_counter}</h1>
            </div>
            </div>
        </>
    }
    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log('getSnapshotBeforeUpdate called ....')
        console.log(prevProps);
        console.log(prevState);
        return "sumit"
    }
    componentDidUpdate(prevProps , prevState , snapshots){
        console.log('componentDidUpdate called ....')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        console.log('Snapshot' , snapshots)
    }
    
}

export default Component2;