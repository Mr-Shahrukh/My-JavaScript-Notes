const score =200
console.log(score);

const wnum = new Number(300)
console.log(wnum);

console.log(wnum.toString().length);//convert num into String
console.log(typeof wnum);//Type of 
console.log(wnum.toFixed(2));//it shows in points->100.00

const num2 = 123.5000
console.log(num2.toPrecision(3));// O/p->124


const num3 = 20000000000
console.log(num3.toLocaleString('en-IN'));//en-IN number in ind format


//*********************MATHS************************ */

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.6));
console.log(Math.ceil(4.8));//highest
console.log(Math.floor(3.001));//lowest
console.log(Math.sqrt(23));//Squre root
console.log(Math.min(4,6,2,8,4));//min value 
console.log(Math.max(4,6,2,8,4));//max value

console.log(Math.random());

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min=24
const max=99
console.log(Math.floor(Math.random()*(max-min+1))+min); 



