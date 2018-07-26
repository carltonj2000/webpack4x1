import * as lib from "./lib.js";

console.log(lib.sum(1, 2));
console.log(lib.substract(3, 1));
console.log(lib.divide(6, 3));

import * as Dog1 from "./dog.js";

const dog1 = new Dog1.default();
dog1.bark(); // 'bark!'

import * as Dog2 from "./dog.js";

const dog2 = new Dog2.default();
dog2.bark(); // 'bark!'

import { sum, substract, divide } from "./lib";

console.log(sum(1, 2));
console.log(substract(3, 1));
console.log(divide(6, 3));

import Dog from "./dog.js";

const dog = new Dog();
dog.bark(); // 'bark!'

import Cat from "./dog.js";

const dog3 = new Cat();
dog3.bark(); // 'bark!'
