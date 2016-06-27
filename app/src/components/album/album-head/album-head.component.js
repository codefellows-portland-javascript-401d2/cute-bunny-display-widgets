import template from './album-head.view.html';
import styles from './album-head.styles.scss';

export default {
  template,
  bindings: {
    currentSection: '='
  },
  require: {
    app: '^^'
  },
  controller() {
    this.styles = styles;
    this.sections = [
      {
        name: 'list',
        text: 'List View',
        fa: 'list'
      },
      {
        name: 'tile',
        text: 'Tile View',
        fa: 'th'
      },
      {
        name: 'full',
        text: 'Full View',
        fa: 'image'
      }
    ];

    this.toggleNav = ($event, sectionName) => {
      $event.preventDefault();

      this.currentSection = sectionName;
    };
  }
};
