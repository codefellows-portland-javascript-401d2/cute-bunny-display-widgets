import template from './display-text.html';
// import style from './text.css';

export default {
  template,
  controllerAs: 'text',
  require: {
    app: '^^'
  },
  controller: function() {
    this.shorten = function() {

    };
  }
};