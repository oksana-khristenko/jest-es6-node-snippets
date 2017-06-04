import getText from './';

describe('ternary', () => {
  describe('getText', () => {
    test('should be defined', () => {
      expect(getText).toBeDefined();
    });

    test('should get correct conditional value when flag is equal to true', () => {
      expect(getText(true)).toBe('flag true');
    });

    test('should get correct conditional value when flag is equal to false', () => {
      expect(getText(false)).toBe('flag false');
    });
  });

});