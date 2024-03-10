// // In JS objects are key and value pairs
// var person={
//     fname:"Eve",
//     sname:"Heaven",
//     age:24,
//     ownsacar:true
// }

// console.log(person)

// //Access

// //Dot notation
// console.log(person.sname)

// // bracket notation
// console.log(person['age'])



//NEW OBJECT

var Disney={
    production: ["Pixar","Disney"],
    genre: {
        Fantasy: ["Turning red", "Ratatoulie"],
        Princess: ["Rapunzel","Frozen"],
        Comedy: ["Monsters Inc.","Hotel Transalvania"],
        Druration: {
            less: 0.5,
            equal: 1,
            more: 2,
        }
    },
    Likeit : true

}

console.log(Disney.production[1])
console.log(Disney.genre.Comedy[0])

//Add properties

Disney.rate=[5,4,3,2,1]
console.log(Disney)

//Deleting property

delete Disney.production
console.log(Disney)