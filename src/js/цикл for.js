//

for (let i = 0; i < 5; i++) {
    console.log(i)
}

const myArray = ['first', 'second', 'third']

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

// более простой вариант перебора в массиве
myArray.forEach((element, index) => {
    console.log(element, index)
})
    