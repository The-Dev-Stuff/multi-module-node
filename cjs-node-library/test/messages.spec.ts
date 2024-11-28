import { greetFromCommonJs } from '../src';

describe('Messages', () => {
  test('should return a greeting message from common js', () => {
    expect(greetFromCommonJs('Manny CommonJS')).toEqual('Hello, there Manny CommonJS! Message from commonjs.');
  });
});
