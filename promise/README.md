Напишите функцию delay(ms), которая возвращает новый промис, переходящий в состояние "resolved" через ms миллисекунд.
Пример использования:
delay(1000).then(() => console.log("Hello!"))	
Необходимо организовать цепочку промисов. 
​​Загрузить данные пользователя используем функцию getUserInfo.
Затем получить ссылку на аватар пользователя, для этого нужно использовать функцию getUserAvatar. Данная функция расширит и вернет объект пользователя.
Затем получить дополнительную информацию по пользователю, для этого нужно использовать функцию getUserAdditionalInfo. Данная функция расширит и вернет объект пользователя.
В конце вывести в консоль финальную версию полученного объекта.
Функции getUserInfo, getUserAvatar, getUserAdditionalInfo возвращают промисы.
Заготовки функций которые нужно использовать getUserInfo, getUserAvatar, getUserAdditionalInfo:
https://gist.github.com/OlegRovenskyi/fe675ca08ee185efa89561f4482b0b37
Необходимо добавить обработку ошибок в следующий код. Ошибка должна быть выведена в консоль.
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
  })
    .then(function(userInfo) {
      return new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error('wrong data') ), 1000);
      });
    })
