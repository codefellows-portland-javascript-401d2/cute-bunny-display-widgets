describe('app component', () => {
	let $component;
	let appComponent;

	module.sharedInjector();

	beforeAll(module('app'));

	beforeAll(inject($injector => {
		$component = $injector.get('$componentController');
	}));

	it('intializes with correct data', () => {
		appComponent = $component('app');

		expect(Object.keys(appComponent.styles).sort()).toEqual(['header', 'main']);
		expect(appComponent.currentSection).toEqual('list');
    expect(appComponent.bunnies).toEqual([]);
    expect(appComponent.bunniesLoaded).toBeFalsy();
	});
});
