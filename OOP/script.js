class Clock {
    constructor(elem, button) {
        this.elem = elem
        this.isFullformat = true;
        this.button = button;
        this.event();
        this.letStart = false;
        this.buttonPress()
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
        this.elem.addEventListener('click', () => {
            this.isFullformat = !this.isFullformat
        })
    }

    stop() {
        clearInterval(this.timer);

    }

    start() {
        this.timer = setInterval(() => {
            this.render()
        }, 1000)
    }

    buttonPress() {
        this.button.addEventListener('click', () => {
            if (this.letStart) {
                this.start()
                this.button.innerHTML = "Stop"
            } else {
                this.stop()
                this.button.innerHTML = "Start"
            }
            this.letStart = !this.letStart;
        })
    }

}

class ShortFormat extends Clock {
    constructor(element, button) {
        super(element, button);
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
        this.timer = setInterval(() => {
            !this.isFullformat ? this.render() : new FullFormat(this.elem, this.button).render();
        }, 100)
    }
}

class FullFormat extends Clock {
    constructor(element, button) {
        super(element, button);
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
        this.timer = setInterval(() => {
            this.isFullformat ? this.render() : new ShortFormat(this.elem, this.button).render();
        }, 100)
    }
}

const clock = document.querySelector('#clock');
const button = document.querySelector(`#stop`);
let fullFormat = new FullFormat(clock, button);
fullFormat.start();






