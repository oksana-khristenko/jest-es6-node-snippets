import example from './';

describe('callback', () => {
  test('should call callback with correct arguments', done => {

    function callback(data) {
      expect(data).toBe('test');
      done();
    }

    example(callback, 'test');
  });
});