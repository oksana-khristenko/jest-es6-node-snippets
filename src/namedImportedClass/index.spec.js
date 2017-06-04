import Example from './';
import {Dependency} from './Dependency';

jest.mock('./Dependency');

describe('Example (named imported class)', () => {
  describe('getValue', () => {
    test('should call getValue() method on Dependency instance once with correct arguments', () => {
      const example = new Example();
      const val = 8;

      example.getValue(val);

      expect(Dependency.prototype.getValue).toBeCalled();
      expect(Dependency.prototype.getValue).toHaveBeenCalledTimes(1);
      expect(Dependency.prototype.getValue).toBeCalledWith(val);
    });

    test('should return correct value', () => {
      Dependency.prototype.getValue.mockReturnValueOnce(4);

      const example = new Example();
      const result = example.getValue();

      expect(result).toBe(8);
    });
  });

});