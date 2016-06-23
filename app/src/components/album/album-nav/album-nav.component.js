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
          name: 'text',
          text: 'Text'
        },
        {
          name: 'thumb',
          text: 'Thumbnail'
        },
        {
          name: 'full',
          text: 'Full Size Image'
        }
      ]
    };

    this.toggleNav = ($event, sectionName) => {
      $event.preventDefault();

      this.currentSection = sectionName;
    };
  }
};
