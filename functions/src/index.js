function nThNoRepeatedValue(arr, num) {
    let nonRepeatedArray = [];
    for(let i = 0; i < arr.length; i++) {
        let counter = 0;
        let element = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (element == arr[j]) {
                counter++;
            }
        }
        if (counter === 1) {
            nonRepeatedArray.push(element);
        }
    }
    
    return nonRepeatedArray[num-1];
}

//console.log(nThNoRepeatedValue([321, 43, 3213, 1689], 4));
//console.log(nThNoRepeatedValue([1, 1, 3, 4, 3, 10], 1));
//console.log(nThNoRepeatedValue([1, 2, 1, 1], 1));

function primeValues(arr) {
    
    let finalArr = [];
    for(let i = 0; i < arr.length; i++) {
        
        let element = arr[i];
        if (element < 1) {
            return console.log(`The number ${element} is an invalid entry`);
        }
        else if (element === 1) {
            finalArr.push(false);
        }
        else {

            function isPrime (num) {
                for(let i = 2, stop = Math.sqrt(num); i <= stop; i++) {
                    if(num % i === 0) {
                        return false;
                    } 
                }
                return true;
            }

            finalArr.push(isPrime(element));
        }
    }
    return finalArr;
}

//console.log(primeValues([4, 2, 7, 10, 13]));
//console.log(primeValues([17, 3, 21]));