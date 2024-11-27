import { greetFromCommonJs } from '../src';

describe('Messages', () => {
  test('should log out a greeting message from common js', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    greetFromCommonJs('Manny CommonJS');
    expect(consoleSpy).toHaveBeenCalledWith('Hello, there Manny CommonJS! Message from commonjs.');
  });
});
