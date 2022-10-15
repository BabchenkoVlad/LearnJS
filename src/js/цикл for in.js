// можем перебрать все свойства объекта
// значения свойства Object[key]


const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}

// тоже с помощью форич. Превращая в массив
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})

Object.values(myObject).forEach(value => {
    console.log(value)
})