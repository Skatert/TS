// напишите динамическую типизацию

type Types = "button" | "text";

type ButtonStyle = "primary" | "secondary";

type TextStyle = "italic" | "bold";

type Variant<T extends Types> = T extends "button" ? ButtonStyle : TextStyle;

interface TextOrButtonProps<T extends Types> {
  type: T;
  variant: Variant<T>;
}

const textOrButton: TextOrButtonProps<Types>[] = [
  { type: "button", variant: "italic" }, //false
  { type: "button", variant: "primary" }, // true
  { type: "text", variant: "bold" }, // true
  { type: "text", variant: "secondary" }, // false
];
