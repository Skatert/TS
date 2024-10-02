// сделайте код рабочим, первые 15 строк трогать запрещено!
type User = {
  name: string;
  age: number;
  sayHello?: Function;
};

const ob1: User = {
  name: "vasya",
  age: 123,
  sayHello() {
    return 0;
  },
};

// тут ваш код

if (ob1.sayHello) {
  console.log(ob1.name, ob1.age, ob1.sayHello());
} else {
  console.log(ob1.name, ob1.age, "sayHello is not defined");
}
