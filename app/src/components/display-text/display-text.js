import template from './display-text.html';

export default {
  template,
  controllerAs: 'text',
  transclude: true,
  bindings: {
    postTitle: '=',
    source: '=',
    description: '='
  },
  controller: function() {
    this.shorten = function(txt) {
      const cutoff = 30;
      if (!txt) return;
      return txt.split(' ').slice(0, cutoff).join(' ') + '...';
    };
  }
};