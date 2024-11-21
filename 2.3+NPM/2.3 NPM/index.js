//var generateName = require('sillyname');
import generateName, { randomNoun } from "sillyname";

import superheroes, { randomSuperhero } from 'superheroes';



var sillyName = generateName();

console.log(`My name is ${sillyName}.` );

console.log(`I am ${randomSuperhero()}!`);