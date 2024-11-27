import { mainMessage } from '../src';

describe('Main Messages', () => {
  test('should log message from main messages', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    mainMessage('Manny');
    expect(consoleSpy).toHaveBeenCalledWith('Hi Manny! This is a message from the main project.');
  });
});
