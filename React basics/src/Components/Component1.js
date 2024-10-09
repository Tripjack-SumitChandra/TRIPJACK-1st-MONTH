import React from "react";

import '../css/Component1.css'

class Component1 extends React.Component{
    constructor(props){
        console.log('Constructor of component1 ...')
        super(props);
        this.state = {
            c1_state:"This is component 1 State"
        }
    }
    componentDidMount() {
        console.log('C1 ComponentDidMount called ....')
    }
    render(){
        console.log('render of component1 ...')
        return <>
        <h1 className="c1__h1">This is inside Component1 </h1>
        <h1 className="c1__h1">{this.state.c1_state}</h1>
        <div className="c1__div">
            <h3 className="c1__h3">{this.props.property}</h3>
        </div>

    </>
    }
}

export default Component1;