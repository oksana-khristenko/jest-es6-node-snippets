import example from './';

describe('snapshot', () => {
  test('should return correct object', () => {
    expect(example(1,2,3)).toMatchSnapshot();
  });
});