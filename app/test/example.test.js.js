const assert = chai.assert;

describe('directive', () => {

  beforeEach(angular.mock.module('components'));

  let render;
  beforeEach(angular.mock.inject($rootScope, $compile => {
    $scope = $rootScope.new();
    render = $compile('<new-post data="app.images"></new-post>');
  }));

  it('does the right thing', () => {
    
  });

});