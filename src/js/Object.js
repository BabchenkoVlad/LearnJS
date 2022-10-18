


// тоже с помощью форич. Превращая в массив
// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key])
// })

// Object.values(myObject).forEach(value => {
//     console.log(value)
// })


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
    makeTest: function() {
        console.log('Test');
    }
}

options.makeTest();

const {border, bg} = options.colors;

// ВАЖНО!
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
// }



const soldier = {
    health: 400,
    armor: 100
}


// создание нового объекта с наследованием прототипа
const john = Object.create(soldier);
// const john = {
//     health: 100
// }


// устанавливаем прототит джону от солдата
Object.setPrototypeOf(john, soldier);

