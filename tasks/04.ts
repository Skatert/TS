// Напишите свой Omit

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
}; // тут ваш код

type Test1 = {
  one: string;
  two: string;
};

type Result1 = MyOmit<Test1, "one">;

const Test100: Result1 = {
  two: "two",
};
