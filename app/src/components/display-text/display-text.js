import template from './display-text.html';
// import style from './text.css';

export default {
  template,
  controllerAs: 'text',
  bindings: {
    postTitle: '=',
    source: '=',
    description: '='
  },
  controller: function() {
    this.shorten = function() {

    };
  }
};