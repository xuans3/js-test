/**
 * Assignment operators
 * = : 
 * += : =>  tăng value của variable = 1 value khác => x += 5 => x = x+5
 *  -= :  x -= 5 tương đương với x = x - 5.
 * *=: Ví dụ: x *= 5 tương đương với x = x * 5.
 *  /= : Ví dụ: x *= 5 tương đương với x = x * 5.
 * %= : Chia giá trị của biến cho một giá trị khác và gán phần dư cho biến đó. 
 * Ví dụ: x %= 5 tương đương với x = x % 5.
 */

// Use  case 1: Basic
let a = 1

// use case 2: chaining 
 let x = y = 1
//  console.log(x)
//  console.log(y)


 // use case 3: += 
 let start =5
  for(let i =1; i <=5; i++){
    // start = start + i;// c1
    start += i;
    console.log(start)
  }