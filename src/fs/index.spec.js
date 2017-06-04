import fs from 'fs';
import setConfig from './';
import dependency from './dependency';

jest.mock('fs');
jest.mock('./dependency');

describe('fs', () => {
  describe('setConfig', () => {
    test('should be defined', () => {
      expect(setConfig).toBeDefined();
    });

    test('should call fs.writeFile() once with correct arguments', () => {
      fs.writeFile.mockImplementationOnce((file, data, callback) => {
        callback();
      });

      const config = './config.js';

      setConfig(config);

      expect(fs.writeFile).toBeCalled();
      expect(fs.writeFile).toHaveBeenCalledTimes(1);
      expect(fs.writeFile.mock.calls[0][0]).toBe(config);

      expect(dependency).toBeCalled();
      expect(dependency).toHaveBeenCalledTimes(1);
    });

  });

});