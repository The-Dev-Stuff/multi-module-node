import { greetFromCommonJs } from 'cjs-node-library';
import { greetFromEs6 } from 'es6-node-library';

export const composedMessageWithCommon = (name: string): string => {
  return `Hello, ${name}! Message from base project. Greeting from common: ${greetFromCommonJs('Manny')}`;
}

export const composedMessageWithEs6 = (name: string): string => {
  return `Hello, ${name}! Message from base project. Greeting from common: ${greetFromEs6('Manny')}`;
}
