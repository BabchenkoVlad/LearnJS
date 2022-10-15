// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFn(11, 3))

// const pOne = {
//     name: 'Bob',
//     age: 21
// }
// function incPersAge(ff) {
//     ff.age += 1
//     return ff
// }
// incPersAge(pOne)
// console.log(pOne.age)


// const personOne = {
//     name: 'Bob',
//     age: 21
// }
// function incPersAge(person) {
//     const updPerson = Object.assign({}, person)
//     updPerson.age += 1
//     return updPerson
// }
// const updPersonOne = incPersAge(personOne)
// console.log(personOne.age)
// console.log(updPersonOne.age)


// function printMyName() {
//     console.log('Vladislav')
// }
// setTimeout(printMyName, 5000)


// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })
// const firstPost = {
//     id: 1,
//     author: 'Vlad',
// }
// console.log(newPost(firstPost))


// const fnwithError = () => {
//     throw new Error('Some error')
// }
// try {
//     fnwithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }
// console.log('Continue...')


// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);



// function sayHello(name) {
//     return `Привет, ${name}!`;
// }
// sayHello('Антон');


// function returnNeighboringNumbers(num) {
//     num = [num - 1, num, num + 1];
//     return num;
// }
// returnNeighboringNumbers(5);


// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }
// getMathResult(10, 5);


// function cube(edge) {
//     if (typeof (edge) !== 'number' || edge < 0 || !Number.isInteger(edge)) {
//         return "При вычислении произошла ошибка";
//     }
//     let square = 0; 
//         volume = 0;

//     square = edge * edge * 6;
//     volume = edge * edge * edge; 
    
//     return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
// }

// console.log(cube(4));


function tickets(num) {
    if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (num === 0 || num > 36) {
        return 'Таких мест в вагоне не существует';
    } else if (num > 0 && num < 5) {
        return 'Ваше купе №1';        
    } else if (4 < num && num < 9) {
        return 'Ваше купе №2';        
    } else if (8 < num && num < 14) {
        return 'Ваше купе №3';        
    } else if (12 < num && num < 18) {
        return 'Ваше купе №4';        
    } else if (16 < num && num < 22) {
        return 'Ваше купе №5';        
    } else if (20 < num && num < 26) {
        return 'Ваше купе №6';        
    } else if (24 < num && num < 30) {
        return 'Ваше купе №7';        
    } else if (28 < num && num < 34) {
        return 'Ваше купе №8';        
    } else if (32 < num && num < 37) {
        return 'Ваше купе №9';        
    }
}

tickets(27);



// function coup(num) {
//     if (0 < num < 5) {
//         console.log('Ваше купе №1');         
//     }
// }

// coup(3);
