function createCounter(num = 0) {

  const counter = function () {
    return num++;
  }

  if(num >= 0) {
    return counter;
  }

}


function multiply(num1) {

  const counter = function (num2) {

    const multiplication = function (num3) {
      return num1 * num2 * num3;
    }

    return multiplication;
  }

  return counter;
}

// console.log(multiply(3)(3)(3));

const counter = createCounter(44);

console.log(counter());
console.log(counter());
console.log(counter());