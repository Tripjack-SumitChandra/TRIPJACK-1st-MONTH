let state = {
    name :"sumit",
    counter : 0
}

let prevState = state; //{..}

function reducer(){
    //Mutable State (shallow copy : memory address is same of prevState and state)
    // return state.counter += 1; 

    //Non-Mutable State (Deep copy : memory address is different of prevState and state)
    return state = {...state , counter: state.counter + 1}
}

reducer();
console.log("state:" , state)
console.log("Prev-state:" , prevState)
reducer();
console.log("state:" , state)
console.log("Prev-state:" , prevState)
reducer();
console.log("state:" , state)
console.log("Prev-state:" , prevState)
reducer();
console.log("state:" , state)
console.log("Prev-state:" , prevState)
