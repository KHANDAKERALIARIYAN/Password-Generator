const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

const allChars = upperCase + lowerCase + numbers + specialChars;

function createPassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;

}

function copyPassword() {

    if (passwordBox) {
        passwordBox.select();
        passwordBox.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => alert("Password copied!"))
            .catch(err => console.error("Failed to copy:", err));
    }

    else {
        console.error("passwordBox not found!");
    }

}