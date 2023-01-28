//1 practice problem

var fruits = ['Apple', 'Banana', 'Orange'];

//(a)
console.log(fruits.indexOf('Banana'));
fruits[1] = 'Mango';
console.log(fruits);

//(b)

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);


//3 practice problem
var num1 = 13;
var num2 = 79;
var num3 = 45;


if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}


//4 
var triAngel1 = 9;
var triAngel2 = 8;
var triAngel3 = 9;

if (triAngel1 === triAngel2 || triAngel1 === triAngel3 || triAngel2 === triAngel3) {
    console.log('they are isoscales');
}

else {
    console.log('they are not isoscales');
}

