// 1
function sum(x) {
    return function (y) {
        return x + y
    }
}

const sum1 = sum(1);
console.log(sum1(2));
console.log(sum(1)(2));

// 2
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}
//Ошибка в том что в консоль выведется десять раз 10
// тк инициализация переменной через var, и ее значение изменяется в глобальной области видимисти и
// не сохраняется в block scope, исправить можно повеняв var на let или обернуть в функцию

for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}

for (var i = 1; i <= 10; i++) {
    ((j) => setTimeout(() => {
        console.log(j);
    }, 0))(i);
}

