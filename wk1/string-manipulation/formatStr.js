/**
 * Format String using template literals
 * Example
 * 
 * ABC Bank Statement from 2022-01-01  to 2021-02-01 for account ending 12345
 */

//example
let stDt = "2022-01-01"
let endDt = "2022-02-01"
let acNum = 12345

let emailSub = `ABC Bank Statement from ${stDt} to ${endDt} for account ending ${acNum}`
console.log(emailSub)