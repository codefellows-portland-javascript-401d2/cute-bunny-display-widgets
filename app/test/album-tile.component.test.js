describe('album tile component', () => {
	let $component;
	let albumTileComponent;

	// angular.mock.module.sharedInjector();

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject($injector => {
		$component = $injector.get('$componentController');
	}));

	it('intializes with correct data', () => {
    let bunnies = [0, 1, 2, 3, 4, 5];

		albumTileComponent = $component('albumTile', null, {bunnies});

		expect(Object.keys(albumTileComponent.styles).sort()).toEqual(['thumbnail']);
		expect(albumTileComponent.bunniesGroup).toEqual([[0, 1, 2], [3, 4, 5]]);
	});
});
