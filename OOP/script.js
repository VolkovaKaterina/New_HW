class Clock {
    constructor(elem) {
        this.elem = elem
    }

    render() {
        this.elem.innerHTML = this.getOptions().join(':')
    }

    getOptions() {
        return [this.getHours()]
    }

    getHours() {
        let date = new Date()
        return date.getHours()
    }
}

class FullFormat extends Clock {
    constructor(element) {
        super(element);
    }

    getOptions() {
        let options = super.getOptions();
        options.push(this.getMinutes(), this.getSeconds());
        return options
    }

    getMinutes() {
        let date = new Date()
        return date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }

    getSeconds() {
        let date = new Date()
        return date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    }

}

class ShortFormat extends Clock {
    constructor(element) {
        super(element);
    }

    getOptions() {
        let options = super.getOptions();
        options.push(this.getMinutes());
        return options
    }

    getMinutes() {
        let date = new Date()
        return date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }
}

const clock = document.createElement('div');
clock.style.cursor = `pointer`
document.body.append(clock)

let short = new ShortFormat(clock);
let full = new FullFormat(clock);
full.render();
let isFullTime = true;

clock.addEventListener('click', ev => {
    isFullTime ? short.render() : full.render()
    isFullTime = !isFullTime
})

setInterval(() => {
    isFullTime ? full.render() : short.render();
}, 1000)