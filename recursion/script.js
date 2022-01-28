//1
const allNumbers = (a, b) => {
    if (a > b) {
        return a === b ? a : `${a} ${allNumbers(a - 1, b)}`
    } else {
        return a === b ? a : `${a} ${allNumbers(a + 1, b)}`
    }
}

// 2
const div = document.createElement(`div`);
document.body.append(div);
div.style.cursor = "pointer";
let isFullTime = true;

const clock = () => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    div.innerHTML = (isFullTime) ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`
}

clock();
setInterval(() => {
    clock()
}, 100)

div.addEventListener('click', () => {
    isFullTime = !isFullTime
})
