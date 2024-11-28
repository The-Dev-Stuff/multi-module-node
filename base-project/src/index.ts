import { composedMessageWithCommon, composedMessageWithEs6 } from './composed-messages.js';

export { greetFromBase, farewellFromBase } from './messages.js';

console.log(composedMessageWithCommon('Manny')); // Hello, Manny! Message from base project. Greeting from common: Hello, there Manny! Message from commonjs.

console.log(composedMessageWithEs6('Manny')); // Hello, Manny! Message from base project. Greeting from common: Hello, there Manny!  Message from ES6 Module.
