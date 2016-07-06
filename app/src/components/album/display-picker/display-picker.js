import template from './display-picker.html';
import styles from './display-picker.scss';

export default {
  template,
  bindings: {
    display: '='
  },
  controller: function() {
    this.styles = styles;
  }
};
