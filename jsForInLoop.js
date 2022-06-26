// For in - Loop

let person ={
    name : 'Anbu Raghavan',
    age : 19,
    sex : "Male"
};

for(let objKey in person){
    console.log(objKey + ":", person[objKey]);
};

console.log("-------------------");

let colors = ['red','blue','green'];


for (let colorsKey in colors){
    console.log(colors[colorsKey]);
}





// Dot Notation -----> person.name
// Bracket Notation ----> person['name']