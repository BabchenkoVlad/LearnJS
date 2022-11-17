const myArray = [1, 2, 3];


// console.log(myArray)

// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)

// myArray[1] = 'abc' // изменение
// myArray[3] = true // добавление

// myArray.push(4) // добавление в конец массива
// myArray.pop() // удаление в конце массива
// myArray.unshift(true) // добавление в начало массива
// myArray.shift() // удаление в начале массива

myArray.sort(compareNum); // сортировка массива по возрастанию
function compareNum(a, b) {
    return a - b;
}

// myArray.forEach(el => console.log(el * 2))  // перебор всего массива, не меняя его
// const newArray = myArray.map(el => el * 3)  // перебор всего массива, с созданием нового, не меняя старый


myArray.forEach(function(item, i, myArray) {
    console.log(`${i}: ${item} внутри массива ${myArray}`)
});

for (let value of myArray) {
    // можно использовать brake и continue
}

const str = '';


const removedelement = myArray.pop() // присвоение удаленного єлемента
const removedelement2 = myArray.shift() // присвоение удаленного єлемента

console.log(myArray[1])



// деструктуризация массивов
// const [ 1, 2 ] = myArray
// const [ 3 ] = myArray
// console.log(1)    -  1



// перебор массива всегда через forEach
const myArray = [true, 10, 'abc', null]

// тоже с помощью форич. Превращая в массив
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})

Object.values(myObject).forEach(value => {
    console.log(value)
})


// ///////////////////////////////////////
// метод перебора массивов

// filter - фильтрует масив
const names = ['123', '2334', '24445', '142315'];

const shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

// map - взять исходный массив и изменить каждый элемент внутри него
const answers = ['IvAn', 'ANNa', 'hElLo'];

const result = answers.map(item => item.toLocaleLowerCase());
console.log(result);

// every - все /some - какойто - перебор массивов по параметру, ответ булиновое значение

const some = ['123', 'sdfs', 'dgdfg', 1];

console.log(some.some(item => typeof (item) === 'number'));
console.log(some.every(item => typeof (item) === 'number'));

// reduce - для сбора массива в одно целое. будь это число или строка

const arr = [4, 5, 6, 2],
    sumArr = arr.reduce((sum, curr) => sum + curr, 0);

console.log(sumArr);

const str = ['ASD', 'FGH', 'ZXC', 'VBN'],
    sumStr = str.reduce((sum, curr) => `${sum}, ${curr}`);

console.log(sumStr);


////////////////////////////////////////////////////////
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);
