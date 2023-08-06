interface Cookie {
  [key: string]: string;
}

export const parseCookie = (str: string): Cookie => {
  return str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc: Cookie, v: string[]) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
}