const assert = require('chai').assert;
const _ = require('../index');

arr1 = [1];
arr2 = [1,2];
arr3 = [1, 2, 3];
arr4 = [1, 2, 3, 4, 5, 6];

arrMiddle = _.middle(arr4)
console.log(arrMiddle);


describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.strictEqual(_.middle(arr1).length, 0);
  });

    it("returns [] for [1, 2]", () => {
      assert.strictEqual(_.middle(arr2).length, 0);
    });

    it("returns 2 for [1, 2, 3]", () => {
      assert.strictEqual(_.middle(arr3)[0], 2);
      });

    it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
      assert.equal(arrMiddle.length, 2);
      assert.equal(arrMiddle[0], 3);
      assert.equal(arrMiddle[1], 4);
        });

});