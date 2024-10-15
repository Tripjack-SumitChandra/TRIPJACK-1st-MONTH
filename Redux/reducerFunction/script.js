let BanKAccount= {
    name : "sumit chandra",
    age : 21,
    balance:40000,
}

function reducerFunction(state , action){
    if(action.type === "increase"){
        return state = {...state , balance : state.balance += action.payload}
    }
    else if(action.type === "decrease"){
        return state ={...state , balance : state.balance -= action.payload}
    }
    else if(action.type === "check"){
        return state = {...state }
    }
    else{
        return console.log(new Error('some error'))
    }

}

//reducer(state , action)

console.log(BanKAccount)
reducerFunction(BanKAccount , {type:"increase" , payload:10000})   
console.log("increment: " , BanKAccount) 
reducerFunction(BanKAccount , {type:"decrease" , payload:20000})
console.log("decrement: " ,BanKAccount)
reducerFunction(BanKAccount , {type:"check"})
console.log("check :", BanKAccount)
reducerFunction(BanKAccount , {type:"kuch bhi"})
// console.log(BanKAccount)

