import { greetFromEs6 } from '../src';

describe('Messages', () =>{
  test('should log out a greeting message from es6 modules', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    greetFromEs6('Manny ES6');
    expect(consoleSpy).toHaveBeenCalledWith('Hello, there Manny ES6!  Message from ES6 Module.');
  });
});
