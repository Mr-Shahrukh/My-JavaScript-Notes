//const tinderUser = new Object()//Singleton Object
/*A singleton object is created only once in the entire application.
Whenever you try to access it again, you get the same instance, not a new copy.*/

//const tinderUser ={}
/*A non-singleton object is created every time you call the constructor or function.
Each time, you get a new copy, stored at a different memory address.
*/

const tinderUser ={}

tinderUser.id = "8787675"
tinderUser.name="Shahrukh"
tinderUser.isLoggedIn = false
//console.log(tinderUser);//{ id: '8787675', name: 'Shahrukh', isLoggedIn: false }

const regularUser={
    email:"sam@gmail.com",
    full_NAme:{
        userFullname:{
            fname:"Shahrukh",
            lName:"Sayyad"
        }
    }
}
//console.log(regularUser.full_NAme.userFullname.fname);

const obj2 = {1:"a",2:"b",3:"c",4:"d"}
const obj3 ={26:"z",25:"y",24:"x",23:"w"}
const obj5 ={26:"p",25:"q",24:"r",23:"s"}

//const obj4 ={obj2,obj3}
//const obj4 = Object.assign({},obj2,obj3,obj5)//combine two object // Object.Assign(Target,source)//empty{} as target to store Data
const obj4 ={...obj2,...obj3,...obj5}//90% of time we used this its also uesd in array//Spread
//console.log(obj4);



console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//it check if key is awilable or not



