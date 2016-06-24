import template from './thumb.html';
import styles from './thumb.scss';

export default {
  template,
  controllerAs: 'thumb',
  bindings: {
    pic: '=',
    select: '&'
  },
  controller: function() {
    this.styles = styles;
  }
};
