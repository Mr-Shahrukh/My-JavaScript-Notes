const marvel_Heros=["Ironman","Thor","SpiderMan"]
const dc_Heros=["SuperMan","Batman","Flash"]

//marvel_Heros.push(dc_Heros)//[ 'Ironman', 'Thor', 'SpiderMan', [ 'SuperMan', 'Batman', 'Flash' ] ]

const all_Heros=marvel_Heros.concat(dc_Heros)//"Cancat" Combine two array and create a new array
console.log(all_Heros);

const all_new_Heros=[...marvel_Heros,...dc_Heros]//"Spred" Operator...
console.log(all_new_Heros);

const arr0=[1,3,4,[2,4,6],[4,3,6,[6,8,9,0]]]
const comb=arr0.flat(Infinity)
console.log(comb);

console.log(Array.isArray(arr0));
console.log(Array.isArray("Shahrukh"));//Check if it's an Array
console.log(Array.from("Shahrukh"));//.form Convert String/Object In to Array
console.log(Array.from({name:"Shahrukh"}));//interesting

let score =100
let score2 =200
let score3=600
console.log(Array.of(score,score2,score3));

