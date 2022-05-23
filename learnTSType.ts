// You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.

//Composing Types

// With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

// Unions
// With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:

type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type PositiveOddNumbers = 1 | 3 | 5 | 7 | 9;

// Generics
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
let strArray: StringArray = ['Hello', 'How', 'are', 'you']

interface Backpack<Type>{
    add:(obj:Type) => void;
    get: () => Type
}