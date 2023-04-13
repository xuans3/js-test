/**
 * Logical operator - OR ||
 * @use
 * to assign a default value 
 * falsy: ("". null, undefined, NaN, 0, false)
 * truly khác với falsy
 */

let targetBrowser = 0  // gía trị của biến là falsy ("". null, undefined, NaN, 0, false)
//let targetBrowser = "Fs"
//nếu giá trị của biến là falsy thì giá trị của biến browser sẽ dc gán bằng "Chrome "
//nếu gti của biến targetBrowser = truly thì browser = targetBrowser
let browser = targetBrowser || "Chrome"
console.log(browser)
