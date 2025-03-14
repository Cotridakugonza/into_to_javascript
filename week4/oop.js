let person ={
    name:"Lady",
    gender:"F",
    Age:20,
    greet:function greet(){
        console.log(`My name is ${person.name}`)
    
    }
}
//contrusctor function-if you find a function starting with a capital letter just know it's a contructor 
class xPerson(name,age,powers){
    this.name=name
    this.age=age
    this.powers=powers
}    

    powers(){
        console.log(`i have${this.powers}`)
    }




const xperson1=new Person('Wolverine',21)
console.log(xperson1)
const xperson2=new Person('Storm',22)
console.log(xperson2)
const xperson3=new Person('Deadpool',23)
console.log(xperson3)
