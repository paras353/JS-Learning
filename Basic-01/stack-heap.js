// Stack ( Primitive ) -  Heap ( Non-Primitive )

let myYoutubeName = "parasmeenaVlogs"

let anotherYoutubeName = myYoutubeName
anotherYoutubeName = "parasVlogMeena"

console.log(myYoutubeName);
console.log(anotherYoutubeName);


let userOne = {
    Name: "Yash",
    Age: "35"
} 

let  userTwo = userOne
userTwo.Name = "Dheeraj "
userTwo.Age = "33 "


console.log(userOne.Name);
console.log(userTwo.Name);
console.log(userOne.Age);
console.log(userTwo.Age);
