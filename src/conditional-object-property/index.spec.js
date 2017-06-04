import getValue from './';

describe('conditional', () => {
  describe('getValue', () => {
    test('should be defined', () => {
      expect(getValue).toBeDefined();
    });

    test('should get correct value when argument is falsy', () => {
      const objNull = null;
      expect(getValue(objNull)).toEqual('gotcha');

      const objFalse = false;
      expect(getValue(objFalse)).toEqual('gotcha');

      const objZero = 0;
      expect(getValue(objZero)).toEqual('gotcha');

      const objString = '';
      expect(getValue(objString)).toEqual('gotcha');

      const objUndefined = undefined;
      expect(getValue(objUndefined)).toEqual('gotcha');
    });

    test('should get correct value when argument is truthy and NOT an object', () => {
      const objNum = 1;
      expect(getValue(objNum)).toEqual('gotcha');

      const objString = 'val';
      expect(getValue(objString)).toEqual('gotcha');
    });

    test('should get correct value when argument is object and val property does not exist', () => {
      const obj = {};
      expect(getValue(obj)).toEqual('gotcha');
    });

    test('should get correct value when argument is object and val property value is truthy', () => {
      const obj = {val: 1};
      expect(getValue(obj)).toEqual(1);
    });

    test('should get correct value when argument is object and val property value is falsy', () => {
      const obj = {val: 0};
      expect(getValue(obj)).toEqual(0);
    });
  });
});