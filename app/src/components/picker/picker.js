import template from './picker.html';

export default {
  template,
  controllerAs: 'picker',
  bindings: {

  },
  controller: function() {
    // Initial radio button selection
    this.display = 'desc';
  }
};
