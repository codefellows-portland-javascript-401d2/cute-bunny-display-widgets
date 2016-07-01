// globals angular, chai

var assert = chai.assert;

describe('picker', () => {

  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  var $component;
  before(angular.mock.inject( ($rootScope, _$componentController_) => {
    $component = (name, bindings) => _$componentController_(name, null, bindings);
  }));

  it('initializes with correct data', () => {
    const picker = $component('picker', {} );
    assert.equal(picker.display, 'thumb');
  });

});
