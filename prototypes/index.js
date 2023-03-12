class Logger {
    #logs = [];

    log (event) {
        this.#logs.push(event);
    }

    getLog () {
        return this.#logs;
    }

    clearLog() {
        this.#logs.length = 0;
    }
}

// const logger = new Logger();
// logger.log('Event 1');
// logger.log('Event 2');
// console.log(logger.getLog()); // ['Event 1', 'Event 2']
// logger.clearLog();
// console.log(logger.getLog()); // []


Array.prototype.shuffle = function () {
    // Loop through the array from the end to the beginning
    for (let i = this.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at positions i and j
        [this[i], this[j]] = [this[j], this[i]];
    }
    
    // Return the shuffled array
    return this;
}


console.log([1,2,3,4].shuffle());
console.log(['a','b','c'].shuffle());