import data from './album-head.data.json';
import template from './album-head.view.html';
import styles from './album-head.styles.scss';

export default {
  template,
  bindings: {
    currentSection: '='
  },
  controller() {
    this.styles = styles;
    this.sections = data;

    this.toggleNav = ($event, sectionName) => {
      $event.preventDefault();

      this.currentSection = sectionName;
    };
  }
};
