/* globals angular, chai */

var assert = chai.assert;

describe('album', () => {

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));
  let $component, $location;
  before(angular.mock.inject( ($rootScope, _$location_, _$componentController_) => {
    $component = (name, bindings) => _$componentController_(name, null, bindings);
    $location = _$location_;
    $albumService = _$albumService_;

    // mock = {alert: jasmine.createSpy()};
    // module(function($provide) {
    //   $provide.value('$window', mock);
    // });
    //
    // inject(function($injector) {
    //   notify = $injector.get('notify');
    // });

  }));

  it('initializes with correct data', () => {
    const display = 'thumb';

    const album = $component('album', { display });
    assert.equal(album.display, display);
  });

  it('on select function, moves to hash with ID in full display view', () => {
    const display = 'thumb';

    const album = $component('album', { display });
    album.select( 'fakeId' );
    assert.equal(album.display, 'full');
    assert.equal($location.hash(), 'fakeId');
  });

});
