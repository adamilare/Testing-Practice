const stringLength = (string) => {
  const length = string.length;
  if (length > 0 && length < 11) return length;
  else throw new Error("string must be between 1 and 10 characters");
};

const reverseString = (string) => string.split("").reverse().join("");

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = { stringLength, reverseString, capitalize };
