let arry = [1,2,4,5,6,8]
  let a = arry.map((value,index,arry) =>{ 
   console.log(value,index,arry)
   return value + 1
} )
// console.log(arry) 
console.log(a)
 
let arry2 = [1,2,4,5,6,8,56,45]
let a3 = arry2.filter((vale) => {
    return vale< 10
})  
console.log (a3)

 let arry3 = [33,45,55,5,345,34,]
 const call_harry =  (call,harry) => {
    return call+harry
 }
 let b = arry3.reduce(call_harry) 
    


 console.log(b)


//  pratice question
// let c  = [1,2,3,4,3,4,4 ]
// let d = prompt("enter a number")
// let as = number.parseInt(d)
// console.log(c)
//   question no 2 

// let c  = [1,2,3,4,3,4,4 ]
// do 
// let d = prompt("enter a number")
// let  = number.parseInt(d)
// console.log(c)

alert("hello how are you adeel still bugging but easy soon")
let asc = prompt("enter your idea ")
document.writeln(asc)
console.log("⚠️ This is your alert message!");