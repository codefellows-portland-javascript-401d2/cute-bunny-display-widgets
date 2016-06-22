import template from './picker.html';

export default {
  template,
  controllerAs: 'picker',
  bindings: {

  },
  controller: function() {

    this.pic = {
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      title: 'Franz the Bunny',
      description: 'An adorable, cuddly bunny',
      thumbpic: './src/data/small.jpg'
    };

    this.display = 'desc';

    this.go = function(){

    };

  }
};
