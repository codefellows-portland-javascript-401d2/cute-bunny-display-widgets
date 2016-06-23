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
    this.data = {
      sections: [
        {
          name: 'list',
          text: 'List View'
        },
        {
          name: 'tile',
          text: 'Tile View'
        },
        {
          name: 'full',
          text: 'Full View'
        }
      ]
    };

    this.toggleNav = ($event, sectionName) => {
      $event.preventDefault();

      this.currentSection = sectionName;
    };
  }
};
