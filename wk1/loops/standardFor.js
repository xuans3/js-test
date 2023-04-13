// for (let i = 0; i <10 ; i++){
//     console.log(i)
// }

// with an Array

let arr=["Apple",10, "Opp",20, "Vina","Samsum", 30 ]
//console.log(arr.length)
let sum=0
for(let i = 0; i <= arr.length;i++){
    //console.log(`>>> List: ${arr[i]}`)
    // let arrEle = arr[i]
    // if(typeof arrEle ==="number") {
    //     sum += arrEle
    //     //console.log(`Sum is: ${sum}`)
    // }
    // // console.log(`Sum is: ${sum}`)

    /**
     * cach2 
     */
    let arrEle = arr[i]
    if(typeof arrEle !=="number") continue 
            sum += arrEle
            //console.log(`Sum is: ${sum}`)
        
} console.log(`Sum is: ${sum}`)