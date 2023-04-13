/**
 * for...in -> object
 * for...ò -> array
 */

let obj={
    a: 1,
    b: 2,
    c: 3,
}
let windows = ["google","amazon", "youtobe"]
for(let key in obj){
    console.log(key) // get all keys
    console.log(obj[key]) // get all the values
}

for (let ele of windows){
    console.log(ele)
}

