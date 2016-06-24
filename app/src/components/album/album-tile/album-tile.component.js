import template from './album-tile.view.html';

export default {
  template,
  bindings: {
    bunnies: '='
  },
  require: {
    app: '^^'
  },
  controller() {
    let bunnies = [];
    let bunniesGroup = [];

    for (let i = 0; i < this.bunnies.length; i++) {
      bunnies.push(this.bunnies[i]);

      if (i % 3 === 2) {
        bunniesGroup.push(bunnies);
        bunnies = [];
      }
    }

    this.bunniesGroup = bunniesGroup;
  }
};
