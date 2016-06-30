describe('app component', () => {
	let $component;
	let appComponent;
  let albumsSvc = {};
  let albumId = 1;

  beforeEach(angular.mock.module('services', $provide => {
    $provide.value('apiUrl', '/api');
  }));

  beforeEach(angular.mock.module('app'));

	// beforeEach(angular.mock.module('app', {
  //   albumsService: albumsSvc
  // }));

	beforeEach(angular.mock.inject($injector => {
		$component = $injector.get('$componentController');
	}));

	it('intializes with correct data', () => {
		appComponent = $component('app');

		expect(Object.keys(appComponent.styles).sort()).toEqual(['header', 'main']);
		expect(appComponent.currentSection).toEqual('list');
    expect(appComponent.bunnies).toEqual([]);
    expect(appComponent.bunniesLoaded).toBeFalsy();

    // albumsSvc.getAlbums = () => {
		// 	return Promise.resolve([]);
		// };
    //
    // albumsSvc.getImages = (id) => {
    //   expect(id).toEqual(albumId);
    //   return Promise.resolve([]);
    // };
	});
});
