// не для объектов

// для строк
const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}

// для массивов (не рекомендуется)
const myArray = [true, 10, 'abc', null]

for (const element of myArray) {
    console.log(element)
}