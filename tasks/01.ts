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

// У Test123 тип будет {two: string; one: boolean; three: string}
// У Test321 тип будет {two: string} или {one: boolean; three: string;}
