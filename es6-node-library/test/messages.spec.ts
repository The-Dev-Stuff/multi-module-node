import { greetFromEs6 } from '../src';

describe('Messages', () =>{
  test('should log out a greeting message from es6 modules', () => {
    expect(greetFromEs6('Manny ES6')).toEqual('Hello, there Manny ES6!  Message from ES6 Module.');
  });
});
