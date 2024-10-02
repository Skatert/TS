// Напишите свой Omit

type MyOmit = {}; // тут ваш код

type Test1 = {
  one: string;
  two: string;
};

type Result1 = MyOmit<Test1, 'one'>;

const Test100: Result1 = {
  two: 'two',
};
