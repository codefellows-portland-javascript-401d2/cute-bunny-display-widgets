import template from './description.html';
import styles from './description.scss';

export default {
  template,
  controllerAs: 'desc',
  bindings: {
    pic: '=',
    select: '&'
  },
  controller: function() {
    this.styles = styles;
  }
};
