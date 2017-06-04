import Example from './';

describe('Example', () => {

  test('should be defined', () => {
    expect(Example).toBeDefined();
  });

  describe('getValue', () => {
    test('should be defined', () => {
      expect(Example.prototype.getValue).toBeDefined();
    });

    test('should return correct value', () => {
      const expected = 'test';
      const example = new Example(expected);

      expect(example.getValue()).toBe(expected);
    });
  });

  describe('setValue', () => {
    test('should be defined', () => {
      expect(Example.prototype.setValue).toBeDefined();
    });

    test('should set correct value', () => {
      const expected = 'test';
      const example = new Example();

      example.setValue(expected);

      expect(example.getValue()).toBe(expected);
    });
  });

});