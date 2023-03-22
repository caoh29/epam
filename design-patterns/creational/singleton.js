let instance = null;

class Car {
    constructor(doors, engine, color) {

        if (!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }

    }
}


const duster = new Car(5, 'V8', 'dark gray');

const aveo = new Car(5, 'V4', 'white');

console.log(duster);
console.log(aveo);