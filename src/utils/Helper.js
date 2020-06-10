let characters = "";
let passwordLength = 0;

const setUpperCase = (isUpperCase) => {
  if (isUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
};
const setLowerCase = (isLowerCase) => {
  if (isLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  return "";
};
const setSymbols = (isSymbol) => {
  if (isSymbol) {
    characters += "!@#$%^&*()_+=-|}]{[:;?/>.<,";
  }
  return "";
};
const setNumber = (isNumber) => {
  if (isNumber) {
    characters += "1234567890";
  }
  return "";
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const passwordCharacters = () => {
  const charactersList = characters;
  let password = "";
  if (charactersList.length > 0) {
    for (let i = 0; i < passwordLength; i++) {
      password +=
        charactersList[getRandomInteger(0, charactersList.length - 1)];
    }
    characters = "";
    passwordLength = 0;
    return password;
  }
};

export const setPasswordLength = (length) => {
  passwordLength = length;
  return passwordLength;
};

export const generatePasswordLength = () => {
  return passwordLength;
};

export const generatePassword = (passwordProps, pwdLength) => {
  const { uppercase, lowercase, symbols, numbers } = passwordProps;

  setPasswordLength(pwdLength);
  setUpperCase(uppercase);
  setLowerCase(lowercase);
  setSymbols(symbols);
  setNumber(numbers);

  const password = passwordCharacters();

  return password;
};

export const copyToClipBoard = (elementRef) => {
  elementRef.select();
  document.execCommand("copy");
};
