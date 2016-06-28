import template from './cell.html';
import styles from './cell.scss';

export default {
  template,
  controllerAs: 'cell',
  bindings: {
    pic: '=',
    display: '=',
    isodd: '=',
    select: '&'
  },
  controller: function() {
    this.styles = styles;
  }
};
