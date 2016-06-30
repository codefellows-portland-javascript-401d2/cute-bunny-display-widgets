describe('app component', () => {
	let $component;
	let appComponent;

	// angular.mock.module.sharedInjector();

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject($injector => {
		$component = $injector.get('$componentController');
	}));

	// it('intializes with correct data', () => {
	// 	appComponent = $component('app');
	//
	// 	expect(Object.keys(appComponent.styles).sort()).toEqual(['header', 'main']);
	// 	expect(appComponent.currentSection).toEqual('list');
  //   expect(appComponent.bunnies).toEqual([]);
  //   expect(appComponent.bunniesLoaded).toBeFalsy();
	// });
});
