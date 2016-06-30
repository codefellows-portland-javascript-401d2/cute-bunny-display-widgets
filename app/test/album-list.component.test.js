describe('album list component', () => {
	let $component;
	let albumListComponent;

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject($injector => {
		$component = $injector.get('$componentController');
	}));

	it('intializes with correct data', () => {
		albumListComponent = $component('albumList');

    expect(Object.keys(albumListComponent.styles).sort()).toEqual(['list-item']);
	});
});
