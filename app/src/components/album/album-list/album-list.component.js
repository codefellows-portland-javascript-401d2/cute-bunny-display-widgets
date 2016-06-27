import template from './album-list.view.html';
import styles from './album-list.styles.scss';

export default {
  template,
  bindings: {
    bunnies: '='
  },
  require: {
    app: '^^'
  },
  controller() {
    this.styles = styles;
  }
};
