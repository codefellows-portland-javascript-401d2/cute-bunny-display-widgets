const assert = chai.assert;

describe('component: description', () =>{

  beforeEach(module('cuteApp'));

  beforeEach(inject(($rootScope, _$componentController_) =>{
    scope = $rootScope.$new();
    $componentController = _$componentController_;
    pic = {
      title: 'Franz the Bunny',
      description: 'Adorable Bunny',
      url: 'www.fake.url.com',
      thumbpic: 'smallpic.jpg'
    };
  }));


  it('should connect the picker object bindings to the description object', () =>{
    component = $componentController('description',
    null,
    {pic: pic}
  );
    assert.equal(component.pic.title, 'Franz the Bunny');
    assert.equal(component.pic.description, 'Adorable Bunny');
    assert.equal(component.pic.url, 'www.fake.url.com');
    assert.equal(component.pic.thumbpic, 'smallpic.jpg');
  });

});
