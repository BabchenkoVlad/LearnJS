const myArray = [1, 2, 3]


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

const str


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