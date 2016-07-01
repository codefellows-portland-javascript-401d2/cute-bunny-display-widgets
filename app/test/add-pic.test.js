// globals angular, chai
const assert = chai.assert;

describe('add-pic component', () => {

  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let $component;

  before(angular.mock.inject( (_$rootScope_, _$componentController_) => {
    $component = (name, bindings) => _$componentController_(name, null, bindings);
  }));

  it('initializes with properties and bindings', () => {
    const addPic = $component('addPic');
    assert.deepEqual(addPic.item, {});
    assert.equal(typeof(addPic.submit), 'function');
  });

  it('performs add bound add function on submit', () => {
    const fakeItem = {title: 'faketitle', description: 'fakeDesc', url: 'fakeUrl'};
    var addFired = false;
    const add = obj => {
      addFired = true;
      assert.deepEqual(obj.newpic, fakeItem);
    };

    const addPic = $component('addPic', { add });
    addPic.item = fakeItem;
    addPic.submit();
    assert.isTrue(addFired);
  });

});
