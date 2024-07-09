/*

 # Destruction (구조분해)


*/

// ex1 - basic 
const user = {
    firstName : '둘', 
    lastName : '리', 
    age : 10 
};

// const firstName = user.firstName; 
// const lastName = user.lastName; 
// const age = user.age; 

const{firstName, lastName, age} = user; 
console.log(firstName, lastName,  age); 

