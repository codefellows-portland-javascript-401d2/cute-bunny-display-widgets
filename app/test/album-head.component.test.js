describe('album head component', () => {
	let $component;
	let albumHeadComponent;
  let currentSection = 'list';

	module.sharedInjector();

	beforeAll(module('app'));

	beforeAll(inject($injector => {
		$component = $injector.get('$componentController');
	}));

	it('intializes with correct data', () => {
		albumHeadComponent = $component('albumHead', null, {currentSection});

		expect(Object.keys(albumHeadComponent.styles).sort()).toEqual(['branding', 'nav']);
	});

  it('toggles the display nav', () => {
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
