export const sum = (a: number, b: number) => a + b;

export const person = (name: string, age: number) => ({ name, age });

export const toggle = (a: boolean) => !a;

export const range = (start: number, end: number) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
