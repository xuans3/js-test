/**
 * Conditional statement use case
 * 1. Just if statement 
 */

let popupExist = true
// check If popipExits is truly => return "click here"
// else return Nothing 
// if(popupExist){
//     console.log(`>> click here....`)
// }else{
//     console.log(`Nothing....`)
// }

//if(popupExist === true) console.log(`>>> Perform click action.... `)

/**
 * US 2: Just if (Not) - checking for falsy value 
 */

//if data is falsy ===> true 
// let data =""
// if(!data) throw Error(">>>No valid data provided")

/**
 * USE Case: if...else: if file exist then read file, else create file
 */

// let fileExist ="y"
// if(fileExist === "y"){
//     console.log(`>>> Reading the file`)
// }else {
//     console.log(`>> Creating new file...`)
// }

/**
 * US 5: If else [Inner Conditions]: quering a database for test data
 */

let isSuccess = true
if(isSuccess===""){
    console.log(`>>> Storing the db value....`)
}else{
    console.log(`>>> No data recived`);
    let errCode = "Accept"
    if(errCode==="No Accept"){
        console.log(`>>>Continue the exection...`)
    }else{
        console.log(`>>>Fail the test`)
    }
}