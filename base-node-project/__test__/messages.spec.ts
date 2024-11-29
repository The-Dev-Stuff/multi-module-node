import { greetFromBase } from '../src/messages';

describe('Messages', () => {
  test('should return a greeting message from base project', () => {
    expect(greetFromBase('Manny')).toEqual('Hello, there Manny! Message from base project.');
  });
});
