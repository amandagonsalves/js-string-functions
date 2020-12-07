const lettersSum = (string1, string2) => {
  const array = [...'abcdefghijklmnopqrstuvwxyz'];

  const getChar = (string, index) => {
    const stringArr = [...string];
    const char = stringArr.sort()[index];

    return array.indexOf(char) + 1;
  }

  const firstNumbers = (string) => {
    return getChar(string, 0);
  }

  const lastNumbers = (string) => {
    return getChar(string, string.length - 1);
  }

  const firstString1 = firstNumbers(string1);
  const lastString1 = lastNumbers(string1);
  const firstString2 = firstNumbers(string2);
  const lastString2 = lastNumbers(string2);

  const calc = (lastString1 * firstString2) + (firstString1 * lastString2);

  return calc;
}

module.exports = lettersSum; 