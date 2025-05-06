const arr = [1,2,3,4,5,6,7];
// console.log(`My favourite array item is: ${arr[0]}`);
const arrLength = arr.length;
// console.log(`Array length is: ${arrLength}`);
arr.push(10)
// console.log(arr);
arr.pop()
// console.log(`Original array: ${arr}`);
let newArr = arr.slice(1,4).reverse().toString().charAt(0);
// console.log(`First element of new array is: ${newArr}`);
// console.log(`Original array: ${arr}`);


const numbers = [1,2,3,4,5]
numbers.unshift(0)
numbers.push(6)
// console.log(numbers);
numbers.reverse()
// console.log(`Expected result: ${numbers}`);
const arr1 = [1,2,3,4,5]
const arr2 = [5,6,7,8,9,10]
arr1.pop()
const resultArr = arr1.concat(arr2)
// console.log(`Expected result: ${resultArr}`);

const person = {
    id : 1,
    name: 'Joe Dohn'
}

//Destructuring the person object
const { id, name } = person;
// console.log(`Id: ${id}`);
// console.log(`Name: ${name}`);

const post = {
    id: 1,
    title: "Post One",
    body: "This is the body",
}

//Convert to JSON String
const jsonString = JSON.stringify(post)
// console.log(jsonString);

const library = [
    {
        title: "First title",
        author: "First author",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        
        title: "Second title",
        author: "Second author",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        
        title: "Third title",
        author: "Third author",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

const { title } = library[0];

const libraryJSONStirng = JSON.stringify(library)
const objLibrary = JSON.parse(libraryJSONStirng)
// console.log(objLibrary);

//FUNCTIONS, SCOPER AND EXECUTION CONTEXT
function registerUser(user = 'Bot'){
    return `${user} has been registered.`
}

// let user = registerUser('Michael')
// console.log(user);

function loginUser(user){
    return !user ? 'No user has been passed' :  `The user with the name ${user.name} and email adress ${user.email} has been logged in.`;
}

const user = {
    name: "Joe Doe",
    email: "joe.doe@gmail.com"
}

let loggedUser = loginUser(user)
// console.log(loggedUser);

const x = 100;

let testFunction = function(){
    const x = 1;
    const y = 2;
    return `Result: ${x + y}`;
}

// console.log(testFunction());

function outerFunc(){
    let x = 100;
    
    function innerFunc(){
        let y = 100;
        let z = x + y
        // console.log(`Result: ${z}`); //accessing X from it's closure(outer function)
    }

    return innerFunc;
}


let outer = outerFunc();
let inner = outer();
// console.log(inner);


//----ARROW FUNCTIONS and Lexical Scope--- //
let sum = (a,b) => {
    return a + b;
}

// let result = sum(1,2)
// console.log(`Result: ${result}`);

//--IIFE(Immediately Invoked Function Expressions)--//
// (function(){
//     const user = 'John'
//     console.log(`User: ${user}`);
// })()

//IIFE with paramethers
// (function(user){
//     console.log(`Hello ${user}.`);
// })('Shawn')


//---EXECUTION CONTEXT---//
const a = 100;
const b = 50;

function getSum(n1,n2){
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(a,b)
const sum2 = getSum(10,5)

// console.log(`Result of sum1: ${sum1}`);
// console.log(`Result of sum2: ${sum2}`);

const users = [
    {
        id:1,
        name:'Brad'
    },
    {
        id:2,
        name:'James'
    },
    {
        id:3,
        name:'Michael'
    }
]

// for(let user of users){
//    console.log(user);
// }

const colorObj = {
    color1 : 'Red',
    color2 : 'Blue',
    color3 : 'Green',
    color4 : 'Purple',
}

// for(let key in colorObj){
//     console.log(`Position ${key}: ${colorObj[key]}`);
// }

const socials = ['Twitter','LindedIn','Facebook','Instagram']

// const largeWords = socials.filter(word => word.length > 8)
// console.log(largeWords);

const numberArray = [5,4,3,2,1]

const evenNumbers = numberArray.filter(number => number % 2 === 0)
// console.log(evenNumbers);

const addedNumbers = [];
numberArray.forEach(function(number){
    if(number % 2 === 0){
        addedNumbers.push(number)
    }
})

// console.log(addedNumbers);

// const retailCompanies = companies.filter(item => item.category === 'Retail')

//1998 - 2005
// const companies = companies.filter(item => item.start >= 1998 && item.end <= 2005)

// const companies = companies.filter(item => (item.start - item.end) >= 10)

const lowerNumbers = numberArray.map(number => number / 2)
// console.log(lowerNumbers);


// const companyNames = companies.map(name => companies.name)

const evenDoubleNumbers = numberArray.filter(number => number % 2 === 0)
.map(number => number / 2)
// console.log(evenDoubleNumbers);
let inititialValue = 2;
const totalProduct = numberArray.reduce((previous,current)=>{
    return previous * current;
},inititialValue)

// console.log(`Total product is ${totalProduct}`);


const shoppingCart = [
    {id:1,name:'Product 1',price:130},
    {id:2,name:'Product 2',price:150},
    {id:3,name:'Product 3',price:175}
]
let inititialValue2 = 0;
//implement the total price of the shopping cart
const totalPrice = shoppingCart.reduce((previous,product)=>previous + product.price,inititialValue2)
// console.log(totalPrice);

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        age: 45,
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        age: 30,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gmail.com',
        age: 19,
    },
]

const youngPeople = people.filter(person => person.age <= 25)
.map(person => {
    return {
        firstName: person.firstName,
        email: person.email
    }
})


// console.log(youngPeople);

const onlyNumbers = [2,-30,50,20,-12,-9,7]
const totalOfPositiveNumbers = onlyNumbers.filter(number => number > 0)
.reduce((accumulator, currentNumber)=>{
    return accumulator + currentNumber
},0)

// console.log(`Total sum of positive numbers: ${totalOfPositiveNumbers}`);


