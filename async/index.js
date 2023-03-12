function callback1 (arr) {
    let counter = 0;
    for (let element of arr) {
        for (let char of element) {
            counter++;
        }
    }
    return counter;
}


function callback2 (arr) {
    let counter = 0;
    let tempArr = [];

    for(let element of arr) {
        for (let char of element) {
            counter++;
        }
        tempArr.push(counter);
        counter = 0;
    }

    return tempArr.reduce((a, b) => a * b);
}


function w (s, callback) {
    const arr = s.split(" ");
    return callback(arr);
}

// console.log(w('a bb ccc dddd', callback1));
// console.log(w('a bb ccc dddd', callback2));

function mocker(data) {
    return () => new Promise(resolve => { 
        setTimeout(() => {
        resolve(data);
        }, 1000);
    });
}

// const getUsers = mocker([{id: 1, name: 'User1'}]);
// getUsers().then((users) => {console.log(users)});

function summarize1(...promises) {
    return Promise.all(promises).then((values) => {
        return values.reduce((a, b) => a + b)
    })
}

async function summarize2(...promises) {
    const values = await Promise.all(promises);
    return values.reduce((a, b) => a + b)
}

// const promise1 = Promise.resolve(4);
// const promise2 = new Promise((resolve) => resolve(2));
// summarize2(promise1, promise2).then((sum) => {console.log(sum);});