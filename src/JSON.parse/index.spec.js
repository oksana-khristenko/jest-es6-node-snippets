import example from './';

describe('example (JSON.parse)', () => {
    test('should call JSON.parse() once with correct arguments', () => {
      global.JSON = {
        parse: jest.fn(() => 'test')
      }

      example(7);

      expect(JSON.parse).toBeCalled();
      expect(JSON.parse).toHaveBeenCalledTimes(1);
      expect(JSON.parse).toBeCalledWith(7);
    });

    test('should return correct value', () => {
      const val = 'test 1';
      JSON.parse.mockReturnValueOnce(val);

      const result = example(14);

      expect(result).toBe(val);
    });
});