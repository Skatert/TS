// сделайте код рабочим, первые 6 строк трогать запрещено!

const ob: unknown = {
  name: "vasya",
  age: 123,
};

// тут ваш код
interface MyUser {
  name: string;
  age: number;
}

const person = ob as MyUser;

console.log(person.name, person.age);
