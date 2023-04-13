/**
 * Compare String
 * 1. Full match 
 * 2. Partial match
 * - includes()
 * - startsWith() //check ky tu dau cua str => return true
 * - endWith()
 * - trim() // bỏ space,  tab, xuống dòng ở đầu, cuối chuỗi
 */

// Full match

let fileName ="   invoice_123.pdf    "
let upperName = fileName.toUpperCase().trim()
console.log(upperName)
if(upperName === "INVOICE_123.PDF"){
    console.log(`>>> File Name matches...`)
}

// Partial match
if(upperName.startsWith('INVOICE')){
    console.log(`>>> Yes, it starts with INVOICE....`)
}
if(upperName.endsWith('.PDF')){
    console.log(`>>> Yes, it end with .PDF....`)
}
// let checkIncludeStr = str1.includes('Hello')

// console.log(checkStartStr)
// console.log(checkIncludeStr)
