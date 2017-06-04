import Example from './';
import dependency from './dependency';

jest.mock('./dependency', () => {
  return jest.fn(() => 1);
});

describe('Example (default imported function)', () => {
  describe('getValue', () => {
    test('should call depedency once', () => {
      const example = new Example();
      example.getValue();

      expect(dependency).toBeCalled();
      expect(dependency).toHaveBeenCalledTimes(1);
    });

    test('should return correct value', () => {
      const example = new Example();
      const result = example.getValue();

      expect(result).toBe(5);
    });
  });

});