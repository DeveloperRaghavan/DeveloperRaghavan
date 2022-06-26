// Constructor Function

// function createPerson(name1){
//     return {
//         name : name1,
//         greetings(){
           
//             console.log(`my name is ${this.name}`);
//         }
      
//     };

// }

function Person(name){ // Your Pascal Format  ---> MyFirstVariable
    
    this.name = name;
    this.greetings = function(){
        console.log(`my name is ${this.name}`);
    }
}

let x = new Person("Anbu");
x.greetings();