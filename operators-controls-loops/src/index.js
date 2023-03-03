function arrayDiff (arr1, arr2) {

    let arrDiff = [];

    if (arr1.length > arr2.length) {
        arr1.forEach(element => {
            if (!(arr2.includes(element))) {
                arrDiff.push(element);
            }
        });
    } else {
        arr2.forEach(element => {
            if (!(arr1.includes(element))) {
                arrDiff.push(element);
            }
        });
    }

    return arrDiff;
}

function evenOrOdd (num1, num2) {
    const range = (start, stop, step=1) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (_, index) => start + (index * step)
        );

    
    let tempArr = range(num1, num2);
    let resultArr = [];

    for(let i = 0; i < tempArr.length; i++) {
        let element = tempArr[i];
        if (element % 2 == 0 ) {
            element = `${element} is even`;
            resultArr.push(element);
        } else {
            element = `${element} is odd`;
            resultArr.push(element);
        }
    }

    return resultArr;
}

function rangeSum (num1, num2) {
    const range = (start, stop, step=1) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (_, index) => start + (index * step)
        );
    
    const resultArr = range(num1, num2).reduce((a, b) => a + b, 0);

    return resultArr;
}


//console.log(rangeSum(5, 10));
//console.log(rangeSum(0, 6));


//console.log(evenOrOdd(0, 3));
//console.log(evenOrOdd(2, 4));


//console.log(arrayDiff([1, 2, 3], [1, 2, 3, 4, 5]));
//console.log(arrayDiff(['a', 'b', 'c'], ['a', 'b']));