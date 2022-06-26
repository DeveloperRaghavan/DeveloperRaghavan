// Factory Function

function createPerson(name1){
    return {
        name : name1,
        greetings: function(){
            let msg = `my name is ${this.name}`
            console.log(msg);
        }
      
    };

}




let paramertesValue = createPerson("Anbu");
let paramertesValue2 = createPerson("Raghavan");

paramertesValue2.greetings();
paramertesValue.greetings();