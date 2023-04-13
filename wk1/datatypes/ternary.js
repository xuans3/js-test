/**
 * Ternary operators : 
 * condition ? expr1 : expr2
 * Trong đó:
 * condition là một biểu thức trả về giá trị boolean.
 * expr1 được thực thi nếu condition là true.
 * expr2 được thực thi nếu condition là false.
 */

let age = 30
//let condMarr = age >=29 ? "Bạn già rồi, nên cưới" :"Chơi tiếp đi còn trẻ mà "

let condMarr = age <= 28 ? "Chơi tiếp" : age ===29 ? "có thế cưới":"cưới"
console.log(condMarr)