function* generator (arr) {
    for (const element of arr) {
        yield element;
    }
}

const it = generator(['brick', 'plate', 'minifigure', 'slope']);

console.log(it.next().value);

console.log(it.next().value);