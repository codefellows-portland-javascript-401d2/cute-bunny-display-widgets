const assert = chai.assert;

describe('Component Unit Tests', () => {

  angular.mock.module.sharedInjector();
  
  before(angular.mock.module('components', ($provide) => {
    $provide.service('albumService', function () {
      return {
        get() {
          return Promise.resolve('nothing');
        }
      };
    });
  }));

  let $component;
  before(angular.mock.inject( ( $rootScope, _$componentController_ ) => {
    $component = ( name, bindings ) => _$componentController_( name, null, bindings );
  }));

  it('intitalized data flows between components properly', () => {
    const mockImages = [{
      title: 'Test', 
      url: 'www.google.com', 
      description: 'testing 1 2 3'
    }];

    const viewer = $component('viewer', {images: mockImages});
    const displayThumb = $component('displayThumb', {
      source: viewer.images[0].url,
      postTitle: viewer.images[0].title
    });
    assert.equal(viewer.images, mockImages);
    assert.equal(displayThumb.postTitle, mockImages[0].title);
  });

  it('newPost.submit fires add() with url in postData', () => {
    let postData = null;
    const add = ({posted}) => postData = posted;
    const newPost = $component('newPost', null, {add});
    const expected = {url: 'foobar', title: 'test'};
    newPost.postData = expected;
    newPost.submit();
    assert.deepEqual(postData, expected);
  });

  it('newPost prevents submission if no URL is present', () => {
    let postData = null;
    const add = ({posted}) => postData = posted;
    const newPost = $component('newPost', {add});
    const expected = {};
    newPost.postData = expected;
    newPost.submit();
    assert.deepEqual(postData, null);
  });

  it('displayText.shorten() truncates description field to 30 words', () => {
    // mockDescription contains 106 words
    const mockDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac elementum lacus, nec aliquam tortor. Donec semper quam non diam iaculis, vel imperdiet ligula luctus. Donec sodales velit ex, pretium vehicula magna malesuada eget. In sed interdum quam. Proin sit amet lorem cursus, pharetra augue eget, molestie lectus. Vestibulum nec malesuada ligula. Donec finibus molestie nisi, sit amet egestas leo tempus ac. Quisque condimentum diam venenatis suscipit tristique. Duis eu lectus elit. Praesent mattis purus sit amet elementum malesuada. In pellentesque fringilla tortor, in aliquet velit placerat eu. Pellentesque sed sapien odio. Nulla dapibus blandit ligula, vel laoreet dui convallis sit amet. Nam eleifend dignissim iaculis.';

    const displayText = $component('displayText', {description: mockDescription});
    const oldWordCount = displayText.description.split(' ').length;
    assert.equal(oldWordCount, 106);
    const newWordCount = displayText.shorten(displayText.description).split(' ').length;
    assert.equal(newWordCount, 30);

  });

});