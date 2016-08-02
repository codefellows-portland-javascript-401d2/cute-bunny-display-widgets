/* globals angular, chai */

var assert = chai.assert;

describe('album', () => {

  angular.mock.module.sharedInjector();

  const albumService = {};
  const providerFunction = $provide => {
    $provide.value('albumService', albumService);
  };

  before(angular.mock.module('components', providerFunction));

  let $component, $location, albumComponent;

  before(angular.mock.inject( ($rootScope, _$location_, _$componentController_) => {
    $component = (name, bindings) => _$componentController_(name, null, bindings);
    $location = _$location_;
  }));

  it('initializes with correct data, including a service GET call', done => {
    const display = 'thumb';
    // !!!!  Make sure that this happens before instantiating the component
    const fakeReturn = ['fake'];
    albumService.get = () => {
      return Promise.resolve( fakeReturn );
    };

    albumComponent = $component('album', { display });
    assert.equal(albumComponent.display, display);
    setTimeout( () => {
      assert.equal(albumComponent.arrayOfPics, fakeReturn);
      done();
    });
  });

  it('adds a new photo to the service', done => {
    const fakeAdd = {title: 'fakeTitle', description: 'fakeDesc', ulr: 'fakeUrl'};
    albumService.add = (obj) => {
      assert.equal(obj, fakeAdd);
      obj._id = 'fakeId';
      return Promise.resolve(obj);
    };

    albumComponent.addpic(fakeAdd);
    setTimeout( () => {
      assert.equal(albumComponent.arrayOfPics[albumComponent.arrayOfPics.length - 1]._id, 'fakeId' );
      done();
    });
  });

  it('removes a photo from the service', done => {
    const initialLength = albumComponent.arrayOfPics.length;
    const fakeRemoved = {title: 'fakeTitle', description: 'fakeDesc', ulr: 'fakeUrl'};
    albumService.remove = (removalId) => {
      assert.equal(removalId, 'fakeId');
      return Promise.resolve(fakeRemoved);
    };

    albumComponent.remove('fakeId');
    setTimeout( () => {
      assert.equal(albumComponent.arrayOfPics.length, initialLength - 1);
      done();
    });
  });

  it('on select function, moves to hash with ID in full display view', () => {
    albumComponent.select( 'fakeId' );
    assert.equal(albumComponent.display, 'full');
    assert.equal($location.hash(), 'fakeId');
  });

});
