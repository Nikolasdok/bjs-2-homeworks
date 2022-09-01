class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("error texte");
        }
        if (this.alarmCollection.some(clock => clock.id === id)) {
            return console.error("Будильник с таким id уже существует!");
        }
        return this.alarmCollection.push({ id, time, callback });
    }
    removeClock(id) {
        let start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((clock) => clock.id !== id);
        let finish = this.alarmCollection.length;
        return (start > finish);
    }
    getCurrentFormattedTime() {
        this.time = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return this.time;
    }

    start() {
        const checkClock = (clock) => {
            if (this.getCurrentFormattedTime() === clock.time) {
                clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((clock) => checkClock(clock));
            }, 1000);
        }
    }
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((clock) => console.log(`Будильник №${clock.id} заведен на ${clock.time}`));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
