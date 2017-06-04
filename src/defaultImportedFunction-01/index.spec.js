import Example from './';
import dependency from './dependency';

jest.mock('./dependency');

describe('Example (default imported function 01)', () => {
  describe('getValue', () => {
    test('should call depedency once', () => {
      const example = new Example();
      example.getValue();

      expect(dependency).toBeCalled();
      expect(dependency).toHaveBeenCalledTimes(1);
    });

    test('should return correct value', () => {
      dependency.mockReturnValueOnce(1);

      const example = new Example();
      const result = example.getValue();

      expect(result).toBe(5);
    });
  });

});