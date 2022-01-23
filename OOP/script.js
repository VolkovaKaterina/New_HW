class Clock {
    constructor(elem) {
        this.elem = elem
        this.isFullformat = true;
        this.event()
    }

    render() {
        this.elem.innerHTML = this.getOptions().join(':');
        this.elem.style.cursor = "pointer"
    }

    getOptions() {
        return [this.getHours()]
    }

    getHours() {
        let date = new Date()
        return date.getHours()
    }

    event() {
        addEventListener('click', () => {
            this.isFullformat = !this.isFullformat
        })
    }

    start() {
        setInterval(() => {
            this.render()
        }, 1000)
    }
}


class ShortFormat extends Clock {
    constructor(element) {
        super(element);
    }

    getOptions() {
        let options = super.getOptions();
        options.push(this.getMinutes());
        return options;
    }

    getMinutes() {
        let date = new Date()
        return date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }

    start() {
        setInterval(() => {
            !this.isFullformat ? this.render() : new FullFormat(this.elem).render();
        }, 100)
    }
}

class FullFormat extends Clock {
    constructor(element) {
        super(element);
    }

    getOptions() {
        let options = super.getOptions();
        options.push(this.getMinutes(), this.getSeconds());
        return options;
    }

    getMinutes() {
        let date = new Date()
        return date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    }

    getSeconds() {
        let date = new Date()
        return date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    }

    start() {
        setInterval(() => {
            this.isFullformat ? this.render() : new ShortFormat(this.elem).render();
        }, 100)
    }
}


const clock = document.createElement('div');
document.body.append(clock);
let fullFormat = new FullFormat(clock);
fullFormat.start();
