function backToFront(word, count) {
  if (word.length >= count) {
    let slicedWord = word.slice(-count);
    return slicedWord + word + slicedWord;
  } else {
    return word;
  }
}

//console.log(backToFront("hello", 1));

function nearest(z, x, y) {
  if (x != y) {
    const x1 = Math.abs(x - z);
    const y1 = Math.abs(y - z);

    return x1 < y1 ? x : y;
  }
}

//console.log(nearest(100, 22, 122));

function removeDuplicate(arr) {
  let finalArr = [];
  arr.forEach((element) => {
    if (!finalArr.includes(element)) {
      finalArr.push(element);
    }
  });
  return finalArr;
}

//console.log(removeDuplicate([1, 2, 3, 2, 3, 1, 1]));
