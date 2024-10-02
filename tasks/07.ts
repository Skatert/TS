// есть тип
type Person = {
  name: string;
  email: string;
  age: number;
  admin: boolean;
};

// напишите дженерик который будет с ним делать следующее

type NullablePerson = {
  name: string | null;
  email: string | null;
  age: number | null;
  admin: boolean | null;
};
