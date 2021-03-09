
import assert from 'assert';
import {three} from "./../src/index.js";
describe('Index', function() {
  describe('three()', function() {
    it('should return 3', function() {
      assert.strictEqual(three(),3);
    });
  });
});