import example from './';

describe('promise', () => {
  test('should resolve promise with correct value', () => {
    expect.assertions(1);

    return example().then(data => {
      expect(data).toBe('orange');
    });
  });
});