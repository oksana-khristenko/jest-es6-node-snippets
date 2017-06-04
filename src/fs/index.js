import fs from 'fs';
import dependency from './dependency';

const setConfig = (file) => {
  return fs.writeFile(file, 'test', function() {
    dependency();
  });
}

export default setConfig;