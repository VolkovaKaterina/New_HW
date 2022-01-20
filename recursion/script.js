// Напишите функцию которая принимает два числа A и В.
//     Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B или в порядке убывания в противном случае. Примените рекурсию.

const allNumbers = (a,b) => {
    if (a > b) {
        return a===b? a:`${a} ${allNumbers(a-1,b)}`
    } else {
        return a===b? a:`${a} ${allNumbers(a+1,b)}`
    }
}

console.log(allNumbers(20,15));

// Реализовать отображение времени на экране:
let div = document.createElement(`div`)
document.body.append(div);
let isFullTime = true;
const clock = () => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()<10?`0${date.getMinutes()}`:date.getMinutes();
    let seconds = date.getSeconds()<10?`0${date.setSeconds()}`:date.getSeconds();
  (isFullTime)? div.innerHTML = `${hours}:${minutes}:${seconds}`: div.innerHTML = `${hours}:${minutes}`
    console.log(`${hours}:${minutes}:${seconds}`)
}
clock();

setInterval(() => {
    clock()
}, 1000)
div.addEventListener('click', e => {
    isFullTime = !isFullTime
    clock();
})