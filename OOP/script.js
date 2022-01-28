class Clock {
    constructor(elem, button) {
        this.elem = elem
        this.buttonChange = button;
        this.letStart = false;
        this.isFullformat = true;
        this.event();
    }

    get hours() {
        let date = new Date()
        return date.getHours()
    }

    get minutes() {
        let date = new Date()
        return date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    }

    get seconds() {
        let date = new Date()
        return date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    }

    get shortTime() {
        return [this.hours, this.minutes]
    }

    get fullTime() {
        return [this.hours, this.minutes, this.seconds]
    }

    start() {
        this.timer = setInterval(() => {
            this.elem.innerHTML = this.isFullformat ? `${this.hours} Hours` : this.shortTime.join(':');
        }, 100)
    }

    stop() {
        clearInterval(this.timer);
    }

    event() {
        addEventListener('click', e => {
            if (e.target.id === 'clock') {
                this.isFullformat = !this.isFullformat
            } else if (e.target.id === 'stop') {
                if (this.letStart) {
                    this.start()
                    this.buttonChange.innerHTML = "Stop"
                } else {
                    this.stop()
                    this.buttonChange.innerHTML = "Start"
                }
                this.letStart = !this.letStart;
            }
        })
    }

}

class ShortFormat extends Clock {
    constructor(element, button) {
        super(element, button);
    }

    start() {
        this.timer = setInterval(() => {
            this.elem.innerHTML = this.isFullformat ? this.shortTime.join(':') : this.fullTime.join(':')
        }, 100)
    }
}

class FullFormat extends Clock {
    constructor(element, button) {
        super(element, button);
    }

    start() {
        this.timer = setInterval(() => {
            this.elem.innerHTML = this.isFullformat ? this.fullTime.join(':') : this.shortTime.join(':');
        }, 100)
    }

}

const clock = document.querySelector('#clock');
const button = document.querySelector(`#stop`);
let fullFormat = new FullFormat(clock, button);
fullFormat.start();

