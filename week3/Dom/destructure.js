let produce ={
    name:"maize",
    price:2000,
    category:"grain",

}
//using dot notation//
const produceName = produce.name;
const produceprice = produce.price;
const produceCategory = produce.category;

console.log(` ${produceName} is a ${produceCategory}`)

//Destructuring is used//
let {name,price,category}=produce
console.log(` ${name} is a ${category}`)

//destructurings give a shorter syntax of calling out objects