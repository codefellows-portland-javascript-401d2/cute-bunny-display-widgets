describe('album full component', () => {
	let $component;
	let albumFullComponent;
	let bunnies = [0, 1, 2, 3, 4, 5];

	// angular.mock.module.sharedInjector();

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject($injector => {
		$component = $injector.get('$componentController');
	}));

	it('goes to the next image in the gallery', () => {
		albumFullComponent = $component('albumFull', null, {bunnies});

		expect(albumFullComponent.bunniesIndex).toEqual(0);

		albumFullComponent.nextImage();
		expect(albumFullComponent.bunniesIndex).toEqual(1);

		albumFullComponent.nextImage();
		expect(albumFullComponent.bunniesIndex).toEqual(2);
	});

	it('goes to the prev image in the gallery', () => {
		albumFullComponent.prevImage();
		expect(albumFullComponent.bunniesIndex).toEqual(1);

		albumFullComponent.prevImage();
		expect(albumFullComponent.bunniesIndex).toEqual(0);

		albumFullComponent.prevImage();
		expect(albumFullComponent.bunniesIndex).toEqual(5);
	});
});
