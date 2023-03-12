function greeting (obj) {
    return `Hello, my name is ${obj.name} ${obj.surname} and I am ${obj.age} years old.`;
}

console.log(greeting({name: 'Bill', surname: 'Jacobson', age: 33}));

console.log(greeting({name: 'Jim', surname: 'Power', age: 11}));