// Напишите interface для массива, словаря, функции, typle.

interface MyArray {
  [index: number]: number
} // тут ваш код

const arr1: MyArray = [123, 33, 2, 3, 3, 1];

interface MyDictionary {
  [key: string]: number | boolean
}

const dictionary: MyDictionary = {
  one: 1123,
  ok: true,
};

interface MyFn {
  (a: number, b: number): number
}

const testFn: MyFn = (a, b) => a + b;

interface MyTyple {
  0: number,
  1: boolean,
  2: string,
  length: 3
}

const testTyple: MyTyple = [1, false, 'str'];
