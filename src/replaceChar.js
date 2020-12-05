const replaceChar = (string, times) => {
  const charMap = [...string.toLowerCase()];
  const last = charMap[charMap.length - 1];

  if (charMap[0] === '?') {
    charMap[0] = last.repeat(times);

    if (last === '?') {
      charMap[0] = charMap[charMap.length - 2].repeat(times);
    }
  }

  for (let i = 0; i < charMap.length; i++) {
    if (charMap[i] === '?') {
      charMap [i] = charMap[i - 1].repeat(times);
    }
  }
  
  const replacedString = charMap.join('');
  
  return replacedString;
}

export default replaceChar; 