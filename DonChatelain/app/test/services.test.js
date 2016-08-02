const assert = chai.assert;

describe('Services Testing', () => {

  let $httpBackend = null;
  let albumService = null;
  let imageService = null;

  beforeEach(
    angular.mock.module('services', $provide => {
      $provide.value( 'apiUrl', '/api');
    })
  );

  beforeEach (angular.mock.inject((_albumService_, _imageService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    albumService = _albumService_;
    imageService = _imageService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('album: get all', done => {
    const albums = {content: ['test1','test2','test3', 'test4']};
    $httpBackend
      .expectGET('/api/albums')
      .respond(albums);

    albumService.get()
      .then(results => {
        assert.deepEqual(results, albums.content);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('album: post new', done => {
    const album = {content: 'Tardigrades'};

    $httpBackend
      .expectPOST('/api/albums')
      .respond(album);

    albumService.post(album)
      .then(result => {
        assert.deepEqual(result, album.content);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('image: get all', done => {
    const images = {content: ['test1','test2']};
    $httpBackend
      .expectGET('/api/images')
      .respond(images);

    imageService.get()
      .then(results => {
        assert.deepEqual(results, images.content);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('image: get by album', done => {
    const images = {content: ['test1','test2']};
    const albumId = '123';
    $httpBackend
      .expectGET(`/api/albums/${albumId}`)
      .respond(images);

    imageService.getByAlbum(albumId)
      .then(results => {
        assert.deepEqual(results, images.content);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('image: post new', done => {
    const image = {content: 'testing'};

    $httpBackend
      .expectPOST('/api/images')
      .respond(image);

    imageService.post(image)
      .then(result => {
        assert.deepEqual(result, image.content);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('image: deletes', done => {
    const image = {content: 'testing'};
    const imageId = '123';

    $httpBackend
      .expectDELETE(`/api/images/${imageId}`)
      .respond(image);

    imageService.del(imageId)
      .then(result => {
        assert.deepEqual(result, image.content);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });


});