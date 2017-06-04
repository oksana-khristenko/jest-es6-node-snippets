import Example from './';
import {dependency} from './dependency';

jest.mock('./dependency');

describe('Example (named imported function 01)', () => {
  describe('getValue', () => {
    test('should call depedency once with correct arguments', () => {
      const example = new Example();
      const val = 78;

      example.getValue(val);

      expect(dependency).toBeCalled();
      expect(dependency).toHaveBeenCalledTimes(1);
      expect(dependency).toBeCalledWith(val);
    });

    test('should return correct value', () => {
      dependency.mockReturnValueOnce(6);

      const example = new Example();
      const result = example.getValue();

      expect(result).toBe(12);
    });
  });

});