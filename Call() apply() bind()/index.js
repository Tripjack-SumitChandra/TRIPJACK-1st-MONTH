// let obj1 = {
//     firstname:"Sumit",
//     lastname:"Chandra",
//     printname: function(){
//         return console.log(this.firstname+ " " +this.lastname)
//     }
// }
// obj1.printname()

// let obj2 = {
//     firstname:"Sachin",
//     lastname:"sharma",
// }
// obj1.printname.call(obj2)     


let obj1 = {
    firstname:"Sumit",
    lastname:"Chandra",
}
let obj2 = {
    firstname:"Sachin",
    lastname:"sharma",
}
function printname(city , state){
    return console.log(this.firstname+ " " +this.lastname + ' from ' + city +', '+state)
}

const printname2=(city , state)=>{
    return console.log('Arrow function >>>>>>'+this.firstname+ " " +this.lastname + ' from ' + city +', '+state)  //this.firstname is undefined
}
console.log('using Call method')

printname.call(obj1 , 'aligarh' , 'uttarpradesh')   // call(object , args1, args2) : jisko this refer karega
printname.call(obj2 , 'Dehradun' , 'Uttrakhand')  

printname2.call(this.obj1 , 'aligarh' , 'uttarpradesh')
printname2.call(this.obj2 , 'Dehradun' , 'Uttrakhand') 

console.log('using Apply method')

printname.apply(obj1 , ['aligarh' , 'uttarpradesh']) //apply me bas arguments kko array me pass karna hota hai
printname.apply(obj2 , ['Dehradun' , 'Uttrakhand'])


console.log('using Bind method')
let duplicatefunction = printname.bind(obj1 , 'Dehradun' , 'Uttrakhand' )  //bind(object , argument1 , argument2 )
// printname.bind(obj1 , 'Dehradun' , 'Uttrakhand' )  //bind(object , argument1 , argument2 )
console.log(duplicatefunction)     //bind makes a duplicate of a function and we pass the object inside it , and this will refer to this passed object
duplicatefunction()         
