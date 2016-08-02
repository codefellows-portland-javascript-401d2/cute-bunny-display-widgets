describe('album head component', () => {
	let $component;
	let albumHeadComponent;
  let currentSection = 'list';

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject($injector => {
		$component = $injector.get('$componentController');
	}));

	it('intializes with correct data', () => {
		albumHeadComponent = $component('albumHead', null, {currentSection});

		expect(Object.keys(albumHeadComponent.styles).sort()).toEqual(['branding', 'nav']);
	});

  it('toggles the display nav', () => {
		albumHeadComponent = $component('albumHead', null, {currentSection});

    let $event = {
      preventDefault() {
        return true;
      }
    };

    albumHeadComponent.toggleNav($event, 'tile');
    expect(albumHeadComponent.currentSection).toEqual('tile');

    albumHeadComponent.toggleNav($event, 'full');
    expect(albumHeadComponent.currentSection).toEqual('full');
  });
});
