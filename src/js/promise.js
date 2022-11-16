// промисы позволяют обрабатывать отложенные во времени события
// ассинхронный запрос - когда не знаешь сколько времени уйдет на запрос на сервер
// ПРОМИС ЭТО ОБЕЩАНИЕ ПРЕДОСТАВИТЬ РЕЗУЛЬТАТ ПОЗЖЕ
// Состояния промиса - ожидание - исполнен - отклонен
//
//




// const myPromise = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//       name: 'tv',
//       price: 2000
//     };
    
//     resolve(product);
//   }, 2000);
// });

// myPromise.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product); // reject();
//     }, 2000);
//   });
// }).then(data => {
//   data.modify = 'true';
//   return data;
// }).then(data => {
//   console.log(data);
// }).catch(() => {
//   console.error("произошла ошибка");
// }).finally(() => {
//   console.log('Finally');
// });


const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));


// выполнить все
Promise.all([test(1000), test(2000)]).then(() => {
  console.log("ALL");
});


// выполнить первый, самый быстрый
Promise.race([test(1000), test(2000)]).then(() => {
  console.log("ALL");
});

