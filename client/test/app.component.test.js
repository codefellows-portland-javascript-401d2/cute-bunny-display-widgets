describe('app component', () => {
	let $component;
	let appComponent;
  let albumsSvc = {};
  let albumId = 1;
  let bunnyAlbum = {
    id: 1,
    name: 'bunnies'
  };
  let bunnyImage = {
    id: 1,
    title: 'Calico Bunny',
    description: 'Too cute to be real.',
    imageLink: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    imageThumbWidth: 150,
    imageThumbHeight: 100,
    imageFullWidth: 504,
    imageFullHeight: 337
  };

	beforeEach(angular.mock.module('app', {
    albumsService: albumsSvc
  }));

  beforeEach(angular.mock.module('services', $provide => {
    $provide.value('apiUrl', '/api');
    $provide.service('albumsService', () => {
      return {
         getAlbums() {
           return Promise.resolve([bunnyAlbum]);
         },
         getImages() {
           return Promise.resolve([bunnyImage]);
         }
       };
    });
  }));

	beforeEach(angular.mock.inject($injector => {
		$component = $injector.get('$componentController');
	}));

	it('intializes with correct data', () => {
		appComponent = $component('app');

		expect(Object.keys(appComponent.styles).sort()).toEqual(['header', 'main']);
		expect(appComponent.currentSection).toEqual('list');
    expect(appComponent.bunnies).toEqual([]);
    expect(appComponent.bunniesLoaded).toBeFalsy();

    albumsSvc.getAlbums = () => {
      return Promise.resolve([bunnyAlbum]);
		};

    albumsSvc.getImages = (id) => {
      return Promise.resolve([bunnyImage]);
    };

    albumsSvc
      .getAlbums()
      .then(albums => {
        let albumOne = albums[0];

        expect(albumOne).toEqual(bunnyAlbum);

        albumsSvc
          .getImages(firstAlbum.id)
          .then(images => {
            let imageOne = images[0];

            expect(imageOne).toEqual(bunnyImage);
          });
      });
	});
});
