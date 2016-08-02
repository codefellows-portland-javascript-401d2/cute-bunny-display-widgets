/* globals angular, chai */

var assert = chai.assert;

describe('cell component', () => {

  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let $component;

  before(angular.mock.inject( ($rootScope, _$componentController_) => {
    $component = (name, bindings) => _$componentController_(name, null, bindings) ;
  }));

  it('initializes with correct data', () => {
    const pic = {
      title: 'Franz the Bunny',
      description: 'Adorable Bunny',
      url: 'www.fake.url.com'
    };
    const display = 'thumb';
    const isodd = false;

    const cell = $component('cell', { pic, display, isodd });
    assert.equal(cell.pic.title, 'Franz the Bunny');
    assert.equal(cell.pic.description, 'Adorable Bunny');
    assert.equal(cell.pic.url, 'www.fake.url.com');
    assert.equal(cell.display, 'thumb');
    assert.isFalse(cell.isodd);
  });

  it('fires select function', () => {
    let selectFired = false;
    const select = () => selectFired = true;

    const cell = $component('cell', { select } );
    cell.select();
    assert.isTrue(selectFired);
  });

});
