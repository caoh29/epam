class Moto {
    constructor(brand, maxSpeed, weight) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
    }
}

const motoMixin = {
    accel() {
        console.log(`The ${this.brand} motorcycle has a top speed of ${this.maxSpeed}`);
    }
}

Object.assign(Moto.prototype, motoMixin);

const zx4rr = new Moto('Kawasaki', 210, 165);

zx4rr.accel();