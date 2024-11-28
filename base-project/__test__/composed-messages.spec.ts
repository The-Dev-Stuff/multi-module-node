import { composedMessageWithCommon, composedMessageWithEs6 } from '../src/composed-messages';

describe('Composed Messages', () => {
  test('should log out a greeting message from base js and common js', () => {
    expect(composedMessageWithCommon('Manny')).toEqual('Hello, Manny! Message from base project. Greeting from common: Hello, there Manny! Message from commonjs.');
  });

  test('should log out a greeting message from base js with es6', () => {
    expect(composedMessageWithEs6('Manny')).toEqual('Hello, Manny! Message from base project. Greeting from common: Hello, there Manny!  Message from ES6 Module.');
  });
});
