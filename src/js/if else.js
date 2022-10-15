// if (условие) { блок кода выполняемый 
// однократно, если условие правдиво}
// else - если условие ложно
// else if
// желательно использовать только иф много раз

const person = {
    age: 20,
    name: 'Vladislav',
}

if (!person.name) {
    console.log('Имя не указано') 
} else if (person.name == '666') {
    console.log(`Привет!`)
} else {
    console.log('Добро пожаловать!')
}

