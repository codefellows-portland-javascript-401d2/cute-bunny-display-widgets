import template from './viewer.html';
import style from './viewer.scss';

export default {
  template,
  controllerAs: 'viewer',
  bindings: {
    images: '=',
    viewOption: '='
  },
  controller: function() {
    this.style = style;
    this.alert = function(i) {
      alert(i);
    };
  }
};