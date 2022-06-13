const passwordEl = document.getElementById("password");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("gerenate");

const upperLetters = "ABCDEFGHIJHLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "=+-_*&%$#@!?";

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() *upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
    const len = lenEl.value;
    let password = "";

    if (upperEl.checked) {
        password += getUpperCase();
    }
    if (lowerEl.checked) {
        password += getLowerCase();
    }
    if (numberEl.checked) {
        password += getNumber()
    }
    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++){
        const x = generateX();
        password += x;
        }
        passwordEl.innerText = password;
    }

function generateX() {
    const pass = [];
    if (upperEl.checked){
        pass.push(getUpperCase());
    }
    if (lowerEl.checked){
        pass.push(getLowerCase());
    }
    if (numberEl.checked) {
        pass.push(getNumber());
    }
    if (symbolEl.checked){
        pass.push(getSymbol());
    }
    if (pass.length === 0) return "";
    return pass[Math.floor(Math.random() * pass.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passwordEl.innerText;

    if (!password){
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    //document.("copy");
    textarea.remove();
    alert("Senha copiada para área de transferência");
});
