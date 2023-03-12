function unique (arr) {
    return Array.from(new Set(arr));
}

console.log(unique([1, 1, 2, 3, 5, 4, 5]));