const phoneNumberWithPrefixRegex = /^([+[0-9]{1,5})([0-9]{9})$/;

export default {
  validateNumberWithPrefix: (number: string) => {
    return phoneNumberWithPrefixRegex.test(number);
  },
  removeCodeFromNumber: (number: string, code?: string) => {
    if (!(number?.length > 7)) return "";
    let parsedNumber = number;
    if (code) {
      console.log(code);
      parsedNumber = parsedNumber.trim().replace(code, "");
    }
    const sanitizedStr = parsedNumber.replace(/\D/g, "");
    parsedNumber = parseInt(sanitizedStr).toString();

    return parsedNumber;
  },
};
