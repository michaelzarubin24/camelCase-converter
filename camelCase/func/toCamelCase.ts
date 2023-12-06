export function toCamelCase(string: string): string {
  const splitChar = string.split(/[-_]/);

  const filteredChar = splitChar.filter((char) => {
    if (char !== "") {
      return char;
    }
  });
  const camelCaseWords = filteredChar.map((char, index) => {
    if (index === 0) {
      return char.toLowerCase();
    } else {
      return char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
    }
  });

  const camelCased = camelCaseWords.join("");

  return camelCased;
}
