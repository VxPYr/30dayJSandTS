// Activity-1: Object Creation and Access
// Task-1
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    // info: function (title,author){
    //     // this.title = title;
    //     return `Title: ${this.title}, Author: ${this.author}`;
    // },
    // updateYear: function (year){
    //     this.year = year;
    //     return year;
    // },
    // yearInfo: function (title, year){
    //     return `Title: ${this.title}, Year: ${this.year}`
    // }
};

// Task-2
console.log(`Book title is ${book.title} and author is ${book.author}.`)

// Activity-2: Object Methods
// Task-3
book.info = function (title,author){
    // this.title = title;
    return `Title: ${this.title}, Author: ${this.author}`;
},
console.log(book.info());

// Task-4
// console.log(book.updateYear(3421));

// let updatedYear = book.updateYear = function (year){
//     this.year = year;
//     return year;
// }
// console.log(updatedYear(2000));

book.updateYear = function (year){
    this.year = year;
    return year;
}
console.log(book.updateYear(6000));

// Activity-3: Nested Objects
// Task-5
let lib = {
    name: "Library",
    books: [{
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",

    },
{
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
},{
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
},
{
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
}]
}
console.log(lib)

// Task-6
console.log(`Name: ${lib.name}`);
lib.books.forEach(element => {
    console.log(element.title);
});

// Activity-4: this keyword
// Task-7
book.yearInfo = function (title, year){
    return `Title: ${this.title}, Year: ${this.year}`
}
console.log(book.yearInfo());