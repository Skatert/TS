// Реализовать тип If, который принимает условие
// C (true или false), и возвращает тип T, если C истинно,
// иначе возвращает тип V. T и V могут быть любого типа.

type If<C extends boolean, T, V> = C extends true ? T : V;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
