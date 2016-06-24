import template from './album-nav.view.html';

export default {
  template,
  bindings: {
    currentSection: '='
  },
  require: {
    app: '^^'
  },
  controller() {
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
