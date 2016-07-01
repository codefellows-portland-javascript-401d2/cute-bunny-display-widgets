import template from './viewer.html';
import style from './viewer.scss';

export default {
  template,
  controllerAs: 'viewer',
  bindings: {
    images: '=',
    viewOption: '=',
    remove: '&'
  },
  controller: function() {
    this.style = style;
  }
};