//1 -part A
const asianCountries = ['india', 'mongolia'] ;
const euroCountries = ['france', 'italy','germany', ...asianCountries];
console.log(euroCountries);
//1 -part B
const arr1 = [1,2,3,4,'dog'];
const arr2 = [5,6,7,8,'pizza'];
const arr1And2 =[...arr1, ...arr2];
console.log(arr1And2);

console.log('==================================')
//2
const names = ['karin', 'lia', 'dana'];
const namesCopy = [...names];
console.log(namesCopy);
console.log('==================================')
//3
const numbers= [200,333,2,3,7888,4000,100000];
const largestNumber = (x) => Math.max(...numbers);
console.log(largestNumber(numbers));

console.log('==================================')
//4
const numbers2= [200,333,2,3,7888,4000,100000];
const smallestNumber = (x) => Math.min(...numbers2);
console.log(smallestNumber(numbers2));

console.log('==================================')
//5
const person = {name: "John"}
const job = {role: "Teacher"}
//5.1
const cloneThePerson ={...person};
//5.2
const employee ={...person, ...job};
employee.name ='karin';
employee.role = 'web-developer'

console.log(employee);


console.log('==================================')

//#### Bonus: 6.  Is the average a whole number?

const isWhole = (a, b, c, d) => {
    return (a + b + c + d) % 4 === 0;
};

console.log(isWhole(9, 2, 2, 5)); //false
console.log(isWhole(4, 4, 4, 4)); //true


// const isWholeArr = arr => {
//     return arr.reduce((acc, v) => acc + v) % 4 === 0;
// };

// console.log(isWholeArr([1, 2, 3, 4]));
