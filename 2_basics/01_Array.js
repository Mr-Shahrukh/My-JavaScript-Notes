//Array

const myArr = [2,4,6,7,1,5,9]
const myHero = ["Ironman","Batman","Superman","Flash","Captain America","Vision"]
console.log(myArr[3])
console.log(myHero.length);

//Array Methods

myArr.push(9)
myArr.push(4)
myArr.pop()

myArr.unshift(1)//Add value at front
myArr.shift()//Delete First value
console.log(myArr)

console.log("============================================");

const arr1 = myArr.slice(1,3)
console.log(myArr);
console.log("A-",arr1);

console.log("============================================");

const arr2 = myArr.splice(1,3)//Splice Manupalte With Original Arr
console.log(myArr);
console.log("B-",arr2);

console.log("============================================");

console.log(myArr);




