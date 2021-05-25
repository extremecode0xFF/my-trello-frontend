export default (pattern: RegExp, text: string): boolean => pattern.test(text);
export const pattern = /^((\w|[А-ЯЁа-яё])+(\s(?!$)|\.|-)?)+$/;
