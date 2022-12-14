export const removeDoubleQuotes = (string: string): string => {
  return string.replace(/"/g, "");
};

export const isKeyPresent = (key: string, string: string): boolean => {
  const regex = new RegExp(`/${key}/i`);
  return regex.test(string);
};
