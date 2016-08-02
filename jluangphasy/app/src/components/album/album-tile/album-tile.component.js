import template from './album-tile.view.html';
import styles from './album-tile.styles.scss';

export default {
  template,
  bindings: {
    bunnies: '='
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
    this.styles = styles;
  }
};
