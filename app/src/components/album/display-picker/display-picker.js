import template from './display-picker.html';
import styles from './display-picker.scss';

export default {
  template,
  controllerAs: 'picker',
  bindings: {
    display: '='
  },
  controller: function() {
    this.styles = styles;
    // Initial radio button selection
    // this.display = 'thumb';
  }
};
