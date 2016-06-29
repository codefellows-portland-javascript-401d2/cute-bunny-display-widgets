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
  require: {
    app: '^^'
  },
  controller: function() {
    this.style = style;
  }
};