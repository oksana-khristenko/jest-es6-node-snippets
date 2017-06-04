import example from './';

describe('example (Math.random)', () => {
    test('should call Math.random() once', () => {
      global.Math = {
        random: jest.fn()
      }

      example();

      expect(Math.random).toBeCalled();
      expect(Math.random).toHaveBeenCalledTimes(1);
    });

    test('should return correct value', () => {
      const val = 0.1;
      Math.random.mockReturnValueOnce(val);

      const result = example();

      expect(result).toBe(val);
    });
});