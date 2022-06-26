// Conditional Statements
//  There Are Two Types
/*----------------------------------------*/
// i) if Else Statement
// ii) Switch Case Statement
/*----------------------------------------*/

/*----------------------------------------*/
// i) If Else 

// let ageRestication = 17;
// if (ageRestication>=18){
//     console.log("Your Age is Elegible for Vote");
// }else{
//     console.log("you are not elegible");
// }
// let weather ="hot";

// let isRaining = false;
// let isCloudy = false;
// if (isRaining || isCloudy){
//     console.log("Don't Forget to Take your RainCoat");
// }else{
//     console.log("Enjoy Your Climate");
// }
            


/*----------------------------------------*/


// if hour is between 12AM(0) to 1PM(13) -> Good Morning
// Else if Hour is between 1PM(13) to 5PM(17) -> Good Afternoon
// Else Hour is between 5PM(17) to 13AM(0) -> Good Evening


// let hrs = new Date();
// let hour = hrs.getHours();

let hour = new Date().getHours();

if(hour >= 0 && hour <=13){
    console.log("Good Morning");
}else if(hour >= 13 && hour<=17){
    console.log("Good Afternoon");
}else{
    console.log("Good Evening");
}