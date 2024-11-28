import { greetFromBase } from '../src';

describe('Messages', () => {
  test('should return a greeting message from base project', () => {
    expect(greetFromBase('Manny')).toEqual('Hello, there Manny! Message from base project.');
  });
});
