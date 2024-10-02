// какой тип будет у Test123 и Test321 ?

type Foo = {
  two: string;
};

type Bar = {
  one: boolean;
  three: string;
};

type Test123 = Foo & Bar;
type Test321 = Foo | Bar;
