import {Dependency} from './Dependency';

class Example {
  getValue(val) {
    const dependency = new Dependency();

    return dependency.getValue(val) * 2;
  }
}

export default Example;