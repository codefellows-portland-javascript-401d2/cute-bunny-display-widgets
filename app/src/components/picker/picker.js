import template from './picker.html';

export default {
  template,
  controllerAs: 'picker',
  bindings: {
    // display: '='
    // url: '='
  },
  controller: function() {
    this.url = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg';
    this.display = 'desc';
    this.go = function(){
      console.log(this.url);
      console.log(this.display);
    };

  }
};
