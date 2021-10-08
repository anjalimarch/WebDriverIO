let day= 'tuesday '

console.log(day.length)
let subDay=day.slice(0,4)

console.log(subDay)
console.log(day[1])
let person={
firstName: "Anjali",
lastName: "Mishra",
age: 24,
fullName: function(){


console.log("FullName--"+this.firstName+" "+this.lastName)

}


}

console.log(person.fullName())

// console.log(person.firstName)
// console.log(person['lastName'])
// person.firstName="Tim Dawn"
// console.log(person.firstName)
// person.gender="male"
// console.log(person)

// delete person.gender
// console.log(person)
// console.log('gender' in person)

// for(key in person){
// console.log(person[key])

//}