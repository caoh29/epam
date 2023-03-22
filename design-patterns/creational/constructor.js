class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}


const duster = new Car(5, 'V8', 'dark gray');

const aveo = new Car(5, 'V4', 'white');

console.log(duster);
console.log(aveo);