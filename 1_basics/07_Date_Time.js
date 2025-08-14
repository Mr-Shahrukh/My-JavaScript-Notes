//Dates

let myDate = new Date()
console.log(myDate.toString());//Thu Aug 14 2025 08:50:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Thu Aug 14 2025
console.log(myDate.toISOString());//2025-08-14T08:50:42.035Z
console.log(myDate.toLocaleDateString());//8/14/2025
console.log(myDate.toJSON());//2025-08-14T08:50:42.035Z
console.log(myDate.toLocaleString());//8/14/2025, 8:50:42 AM
console.log(myDate.toTimeString());//08:50:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());//Thu, 14 Aug 2025 08:50:42 GMT
console.log(myDate.toLocaleTimeString());//8:50:42 AM
console.log(typeof myDate);//Object

console.log("******************************************************************");


//let MycreatedDate = new Date(2025,0,21)//Tue Jan 21 2025 //*Month Start with "0" In JS
//let MycreatedDate = new Date(2025,0,21,5,3)//1/21/2025, 5:03:00 AM
//let MycreatedDate = new Date(2025,0,21,5,3)
let MycreatedDate = new Date("2025-10-23")
console.log(MycreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(MycreatedDate.getTime());//milisec



