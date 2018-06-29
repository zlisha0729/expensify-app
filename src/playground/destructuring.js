// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: "New York",
//         temp: 92
//     }
// };

// const {name: firstName = "Lisha", age} = person;

// const {city, temp: temperature} = person.location;

// console.log(`${firstName} is ${age} year old`);

// console.log(`${city} is ${temperature}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = "Self-published"} = book.publisher;
console.log(`The publish name is ${publisherName}`);

const address = ['1299 S Juniper Street', 'Philadephia', 'Pennsylvania', '1947'];

const [street, city, state, zip, country = "USA"] = address;

console.log(`You are in ${city} ${state} in ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

console.log('A medium Coffee (hot) costs $2.50');

const [coffee, , md, ] = item;
console.log(`A medium ${coffee} costs ${md}`);