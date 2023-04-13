/**
 * parseInt()
 * parseFloat()
 * toString()
 */

let val1 = "5"
let val2 ="5.5"
 console.log(`Type of val1:${typeof val1}`)// string
 console.log(`Type of val1:${typeof val2}`)//string 

 // convert a string to number 

 numVal = parseInt(val1)
 numVa2 = parseFloat(val2)


 console.log(`Type of val1:${typeof numVal}, and the value :${numVal}`)// number
 console.log(`Type of val1:${typeof numVa2},  and the value :${numVa2}`)//number

 // convert to a String

 numVal3 = +val1
 numVal4 = +val2

console.log(`The type of Unary plus is:${typeof numVal3}`)

// convert to String 

let convToStr = numVal3.toString()
 console.log(`Type of val1:${typeof convToStr}, and the value :${convToStr}`)// number
//  console.log(`Type of val1:${typeof numVa2},  and the value :${numVa2}`)//number
