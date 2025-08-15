//Singleton
//Object.create

//Object literals
const mysym = Symbol("Key1")
const obj1 = {
    name: "Shahrukh",
    //mysym : "Key1",//"mysym"Not used as Symbol its used as String .We need to use []for symbols
    [mysym ]: "Key1",
    "full Name":"Shahrukh Sayyad",
    Age: 23,
    Email: "Shahrukh@gmail.com",
    Location: "Shirdi",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
}
console.log(obj1.name);//1st Method
//console.log(obj1."full Name");//We cannot acces "full name " with "."
console.log(obj1["name"]);
console.log(obj1["full Name"]);//2nd Method
console.log(obj1.mysym);
console.log(typeof obj1[mysym]);

obj1.Location = "Pune"
console.log(obj1);
//Object.freeze(obj1)//for not changing Object
//obj1.Location ="Shirdi"
//console.log(obj1);

obj1.greeting = function(){
    console.log("Hello Shahrukh");
    
}

obj1.greeting2 = function(){
    console.log(`Hello Shahrukh,${this.Email}`);//String Manupulation
    
}
console.log(obj1.greeting());
console.log(obj1.greeting2());



