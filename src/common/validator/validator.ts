export default (pattern: RegExp, text: string): boolean => pattern.test(text);
export const pattern = /^((\w|[А-ЯЁа-яё])+[\s.-]?)+$|^$/;
export const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
