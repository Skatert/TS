// протипизируйте ответ сервера

type ResultType = "success" | "error" | "debugg" | "rejected";

interface UserData {
  name: string;
  age: number;
  email: string;
  optionalProperty?: string;
  optionalProperty2?: string;
  optionalProperty3?: number;
}

interface ServerResponse {
  result: ResultType;
  count: number;
  data: UserData[];
}

const responseServer: ServerResponse = {
  result: "success", // может принимать одно из следующих значений  success, error, debugg, rejected
  count: 4,
  data: [
    {
      name: "ivan",
      age: 22,
      email: "example@gmail.ru",
      optionalProperty: "string",
      optionalProperty2: "string",
    },
    {
      name: "dasds",
      age: 22,
      email: "example@gmail.ru",
      optionalProperty2: "string",
      optionalProperty3: 12,
    },
    {
      name: "ssssss",
      age: 23,
      email: "examp2le@gmail.ru",
      optionalProperty2: "string",
      optionalProperty3: 12,
    },
    {
      name: "aassss",
      age: 44,
      email: "ex1amp2le@gmail.ru",
    },
  ],
};
