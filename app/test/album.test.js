/* globals angular, chai */

var assert = chai.assert;

describe('album', () => {

  angular.mock.module.sharedInjector();

  const albumService = {};

  const providerFunction = $provide => {
    $provide.value('albumService', albumService);
  };

  before(angular.mock.module('components', providerFunction));

  let $component, $location;

  before(angular.mock.inject( ($rootScope, _$location_, _$componentController_) => {
    $component = (name, bindings) => _$componentController_(name, null, bindings);
    $location = _$location_;
  }));

  it('initializes with correct data', done => {
    const display = 'thumb';

    // Mock the Servce methods---------------------------------
    // !!!!  Make sure that this happens before instantiating the component
    const fakeReturn = ['fake'];
    albumService.get = () => {
      // test any arguments are their expected value
      // assert.equal(param, testValue);
      return Promise.resolve( fakeReturn );
    };
    //----------------------^^^^^^^^----------------------------

    const album = $component('album', { display });
    assert.equal(album.display, display);

    //----------------------------------------------------------
    setTimeout( () => {
      assert.equal(album.arrayOfPics, fakeReturn);
      done();
    });
    //----------------------^^^^^^^^----------------------------
  });

  // Mock add

  // Mock remove



  it('on select function, moves to hash with ID in full display view', () => {
    const display = 'thumb';

    const album = $component('album', { display });
    album.select( 'fakeId' );
    assert.equal(album.display, 'full');
    assert.equal($location.hash(), 'fakeId');
  });

});
