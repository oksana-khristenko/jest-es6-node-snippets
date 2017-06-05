import example from './';

describe('promise', () => {
  test('should reject promise with correct value', () => {
    expect.assertions(1);

    return example().catch(data => {
      expect(data).toBe('red');
    });
  });
});