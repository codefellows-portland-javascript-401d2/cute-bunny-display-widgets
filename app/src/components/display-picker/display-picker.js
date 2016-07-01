import template from './display-picker.html';

export default {
  template,
  controllerAs: 'picker',
  bindings: {
    display: '='
  },
  controller: function() {

    // Initial radio button selection
    // this.display = 'thumb';
  }
};
