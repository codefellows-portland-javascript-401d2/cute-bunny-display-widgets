describe('album full component', () => {
	let $httpBackend = null;
	let albumsService = null;

	beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

	beforeEach(angular.mock.inject($injector => {
		$httpBackend = $injector.get('$httpBackend');
		albumsService = $injector.get('albumsService');
	}));

	afterEach(() => {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('get albums', () => {
		let returnAlbums = [1, 2, 3];

		$httpBackend
		  .expectGET('/api/albums')
			.respond(returnAlbums);

		albumsService
		  .getAlbums()
			.then(albums => {
				expect(albums).toEqual(returnAlbums);
			});

		$httpBackend.flush();
	});

	it('add album', () => {
		let newAlbum = {
			name: 'bunnies'
		};
		let returnAlbum = {
			isReturnAlbum: true
		};

		$httpBackend
		  .expectPOST('/api/albums', newAlbum)
			.respond(returnAlbum);

		albumsService
		  .addAlbum(newAlbum)
			.then(album => {
				expect(album).toEqual(returnAlbum);
			});

		$httpBackend.flush();
	});

	it('get album', () => {
		let albumId = 1;
		let returnAlbum = {
			name: 'bunnies'
		};

		$httpBackend
		  .expectGET(`/api/albums/${albumId}`)
			.respond(returnAlbum);

		albumsService
		  .getAlbum(albumId)
			.then(album => {
				expect(album).toEqual(returnAlbum);
			});

		$httpBackend.flush();
	});

	it('get images', () => {
		let albumId = 1;
		let returnImages = [1, 2, 3, 4, 5, 6];

		$httpBackend
		  .expectGET(`/api/albums/${albumId}/images`)
			.respond(returnImages);

		albumsService
		  .getImages(albumId)
			.then(images => {
				expect(images).toEqual(returnImages);
			});

		$httpBackend.flush();
	});

	it('add image', () => {
		let albumId = 1;
		let newImage = {
			title: 'Calico Bunny',
	    description: 'Too cute to be real.',
	    imageLink: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
	    imageThumbWidth: 150,
	    imageThumbHeight: 100,
	    imageFullWidth: 504,
	    imageFullHeight: 337
		};
		let returnImage = {
			isReturnImage: true
		};

		$httpBackend
		  .expectPOST(`/api/albums/${albumId}/images`, newImage)
			.respond(returnImage);

		albumsService
		  .addImage(albumId, newImage)
			.then(image => {
				expect(image).toEqual(returnImage);
			});

		$httpBackend.flush();
	});

	it('get image', () => {
		let albumId = 1
		let imageId = 1;
		let returnImage = {
			title: 'Calico Bunny',
	    description: 'Too cute to be real.',
	    imageLink: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
	    imageThumbWidth: 150,
	    imageThumbHeight: 100,
	    imageFullWidth: 504,
	    imageFullHeight: 337
		};

		$httpBackend
		  .expectGET(`/api/albums/${albumId}/images/${imageId}`)
			.respond(returnImage);

		albumsService
		  .getImage(albumId, imageId)
			.then(image => {
				expect(image).toEqual(returnImage);
			});

		$httpBackend.flush();
	});
});
