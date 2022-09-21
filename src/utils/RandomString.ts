const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const validCharsNum = validChars.length;
export const generateRandomAlphaNumString = (len = 12): string => {
  let str = '';
  for (let i = 0; i < len; i++) {
    str += validChars.charAt(Math.round(Math.random() * validCharsNum));
  }

  return str;
};
