// напишите динамическую типизацию

type Types = 'button' | 'text';

type ButtonStyle = 'primary' | 'secondary';

type TextStyle = 'italic' | 'bold';

interface TextOrButtonProps {
  type: Types;
  variant: ButtonStyle | TextStyle;
}

const textOrButton: TextOrButtonProps[] = [
  { type: 'button', variant: 'italic' }, //false
  { type: 'button', variant: 'primary' }, // true
  { type: 'text', variant: 'bold' }, // true
  { type: 'text', variant: 'secondary' }, // false
];
