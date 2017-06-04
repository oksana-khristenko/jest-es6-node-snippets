import {dependency} from './dependency';

class Example {
  getValue(val) {
    const a = dependency(val);

    return a * 2;
  }
}

export default Example;