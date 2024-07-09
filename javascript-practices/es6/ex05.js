/*

* Arrow Function 

*/

const power = function(x) {
    return x * x; 
};

const nums = [1, 2, 3, 4, 5]; 

// Using the traditional function
nums.forEach(function(e) {
    process.stdout.write(` ${e}:${power(e)}\t` );
}); 

// Using the arrow function
console.log("\n==================="); 

nums.forEach(e => {
    const result = (function(x) {
        return x * x; 
    })(e);

    process.stdout.write(` ${e}:${result}\t`);
});

// Using arrow function for power as well
console.log("\n==================="); 

const powerArrow = x => x * x;

nums.forEach(e => {
    process.stdout.write(` ${e}:${powerArrow(e)}\t`);
});