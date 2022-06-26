/* Object - Oriented Programming (oop) */

// let name = "Raghavan";
// let age = 19;
// let interest = ['coding', 'sports', 'cooking'];

// let address = {
//     city : "Chennai",
//     State : "Tamil Nadu",
//     Pincode : 611-003
// }


// function greetings(){
//     // let msg = "My Name is " + name + ", i love " + interest;
//     // let mesg1 = "my name is ${name} ";
//     console.log(mesg1);
// }

// greetings();

// Encapsulation =
// This method is called as Nested Object
let person = {
    name : "Raghavan",
    age :  19,
    isAlive : true,
    interest : ['coding', 'sports', 'cooking'],
    address : {
        city : "Chennai",
        State : "Tamil Nadu",
        Pincode : 611003
    },
    greetings: function(){
        // let msg = "My Name is " +this.name + ", i love " + this.interest;
        let msg = `my name is ${this.name}`
        console.log(msg);
    }
  
};

person.greetings();

