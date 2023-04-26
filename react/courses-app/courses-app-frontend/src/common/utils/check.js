export function checkName (name) {
    return name !== '' && name.length <= 30 && name.length >= 3 ? true : false;
};

export function checkEmail (email) {
    return email !== '' && email.includes('@') && email.includes('.com') && email.length >= 5 && email.length <= 30 ? true : false;
};

export function checkPassword (password) {
    return password !== '' && password.length >= 6 && password.length <= 20 ? true : false;
};