class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class carFactory {
    createCar(type) {
        switch (type) {
            case 'duster':
                return new Car(5, 'V8', 'dark gray');
            case 'aveo':
                return new Car(5, 'V4', 'white');
        }
    }
}

const factory = new carFactory();
const myDuster1 = factory.createCar('duster')

const myAveo1 = factory.createCar('aveo')


console.log(myDuster1);
console.log(myAveo1);


//OR

function createNewCar(type) {
    switch (type) {
        case 'duster':
            return new Car(5, 'V8', 'dark gray');
        case 'aveo':
            return new Car(5, 'V4', 'white');
    }
}

const myDuster2 = createNewCar('duster');
const myAveo2 = createNewCar('aveo');

console.log(myDuster2);
console.log(myAveo2);