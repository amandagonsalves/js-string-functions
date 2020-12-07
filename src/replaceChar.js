const replaceChar = (string, times) => {
  const charMap = [...string.toLowerCase()];
  const last = charMap[charMap.length - 1];

  if (charMap[0] === '?') {
    charMap[0] = last.repeat(times);

    last === '?' ? charMap[0] = charMap[charMap.length - 2].repeat(times) : charMap[0];
  }

  for (let i = 0; i < charMap.length; i++) {
    if (charMap[i] === '?') {
      charMap [i] = charMap[i - 1].charAt(last).repeat(times);
    }
  }

  const replacedString = charMap.join('');

  return replacedString;
}

module.exports = replaceChar; 