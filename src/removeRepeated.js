const removeRepeated = (string, limit) => {
  const replacedString = string.replace(/([a-zA-Z])\1+/g, match => match.substring(0, limit));

  return replacedString;
}

export default removeRepeated;