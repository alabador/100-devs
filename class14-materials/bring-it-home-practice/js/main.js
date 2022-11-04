// *Variables*
// Create a variable and console log the value
let test = 5;
console.log(test);

// Create a variable, add 10 to it, and alert the value
let lol = 0;
alert(lol+=10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(a,b,c,d) {
    alert(a-b-c-d);
}

subFour(5,-2,10,2);
// Create a function that divides one number by another and returns the remainder
function remainder(a,b){
    return a%b;
}
console.log(remainder(7,2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    if(a + b > 50) alert("JUMANJI")
    else return a + b;
}

console.log(jumanji(24, 5));
console.log(jumanji(24, 34));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multThreeZebra(a,b,c){
    const product = a*b*c;
    if (product % 3 === 0) alert('ZEBRA');
    else return product;
}

console.log(multThreeZebra(3,1,9));
console.log(multThreeZebra(2,4,8));

//Create a function that checks if a is larger than b
function isLarger(a,b) {
    return a>b;
}