const replaceChar = (string, times) => {
  let replaced = '';

  const splited = string.split(/\?/);

  for (let index = 0; index < splited.length; index++) {
    const item = splited[index];
    const last = item.length - 1;

    console.log(item, last, index)

    if (item.length === 0) {
      continue;
    }

    replaced += `${item.substr(0, last)}${item.charAt(last).repeat(times + 1)}`;
  }
  console.log(splited)

  return replaced;
}

console.log(replaceChar('?x?y?z', 1))