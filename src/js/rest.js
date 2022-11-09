// отдельные элементы объединяет в массив

const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log('bas', 'rest', 'operat', 'usage');


function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}

calcOrDouble(3, 1);