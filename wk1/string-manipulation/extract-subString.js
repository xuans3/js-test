/**
 * extract substring  - use method
 * str.substr(startIndex, length);
 * subString() >>>str.substring(startIndex, endIndex) // extract 1 chuỗi con từ chuỗi ban đầu 
 * str.substr(startIndex, length); /// str.substr(startIndex, length);
 */
// slice()
let dt = "2022-01-01"
let yymmdd = dt.slice(2)
console.log(yymmdd)

// extract year (4 digital - 0 index)

let year = dt.slice(0,4) //2022
console.log(year)
// extract month  (2 digital - 5 index)
let mm = dt.slice(5,7)
console.log(mm)//01

// extract date  (2 digital - 9 index)
//let dd = dt.slice(8,10)
let dd = dt.slice(-2)
console.log(dd)//01
