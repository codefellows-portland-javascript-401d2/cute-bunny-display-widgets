import template from './cell.html';
import styles from './cell.scss';

export default {
  template,
  controllerAs: 'cell',
  bindings: {
    pic: '=',
    select: '&',
    display: '=',
    isodd: '='
  },
  controller: function() {
    var self = this;
    self.mytemp = 'temp';
    self.styles = styles;
  }
};
