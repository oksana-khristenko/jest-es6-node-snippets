import dependency from './dependency';

class Example {
  getValue() {
    const a = dependency();

    return a + 4;
  }
}

export default Example;