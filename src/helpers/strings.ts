export const firstLetterToLowerCase = (text: string) =>
  text?.substr(0, 1).toLowerCase() + text?.substr(1);

export const firstLetterToUpperCase = (text: string) =>
  text?.substr(0, 1).toUpperCase() + text?.substr(1);

export const separateString = (text: string) =>
  firstLetterToUpperCase(
    // separate string before upper case and replace all upper case to lower case.
    text?.replace(/[A-Z]/g, (l) => ` ${l.toLowerCase()}`).trim()
  );

export const separateOnDotString = (text: string) => {
  const texts = text.split(".");

  return firstLetterToUpperCase(texts[texts.length - 1]);
};
