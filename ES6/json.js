function isValidJSON (str) {
    try {
        JSON.parse(str);
        return true;
    } catch (err) {
        return false;
    }
}

console.log(isValidJSON('{"a": 2}'));
console.log(isValidJSON('{"a: 2'));