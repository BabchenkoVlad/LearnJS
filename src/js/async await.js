// 

// async/await специальный синтаксис для упрощения
// работі с промисами
// await синтаксис возможен только внутри async функции
// айсинк ожидает результата от эвэйт и не выполняет последующие функции

//async function asyncFn() {
    // всегда возвращает промис
//}

//const asyncFn = async () => {
//    return 'Success!' //всегда возвращает промис
//}

//asyncFn()
//    .then(value => console.log(value))

const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn()