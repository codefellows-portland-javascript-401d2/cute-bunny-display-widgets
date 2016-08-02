// globals angular, chai
const assert = chai.assert;

describe('album-service', () => {

  let $httpBackend = null, albumService = null;

  beforeEach(
    angular.mock.module('services', {apiUrl: '/api'})
  );

  beforeEach(angular.mock.inject( (_$httpBackend_, _albumService_) => {
    $httpBackend = _$httpBackend_,
    albumService = _albumService_;
  }));

  afterEach( () => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('performs get', done => {
    const returnedArray = ['fakeData'];
    $httpBackend
      .expectGET('/api')
      .respond(returnedArray);

    albumService.get()
      .then( data => {
        assert.deepEqual(data, returnedArray);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('peforms add', done => {
    let givenObj = {title: 'fakeTitle', description: 'fakeDesc', url: 'fakeUrl'};
    const returnedObj = {title: 'fakeTitle', description: 'fakeDesc', url: 'fakeUrl', _id: 'fakeId'};
    $httpBackend
      .expectPOST('/api', givenObj)
      .respond(returnedObj);

    albumService.add(givenObj)
      .then( receivedObj => {
        assert.deepEqual(receivedObj, returnedObj);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('performs remove', done => {
    const deleteObjID = 'fakeId';
    const deletedObj = {title: 'fakeTitle', description: 'fakeDesc', url: 'fakeUrl', _id: 'fakeId'};
    $httpBackend
      .expectDELETE(`/api/${deleteObjID}`)
      .respond(deletedObj);

    albumService.remove(deleteObjID)
      .then( receivedObj => {
        assert.deepEqual(receivedObj, deletedObj);
        assert.equal(receivedObj._id, deleteObjID);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});
