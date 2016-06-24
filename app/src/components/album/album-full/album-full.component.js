import template from './album-full.view.html';
import styles from './album-full.styles.scss';

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
    this.bunniesIndex = 0;
    this.bunny = this.bunnies[this.bunniesIndex];

    this.prevBtn = () => {
      if (this.bunniesIndex !== 0) {
        this.bunniesIndex -= 1;
      } else {
        this.bunniesIndex = this.bunnies.length - 1;
      }

      this.bunny = this.bunnies[this.bunniesIndex];
    };

    this.nextBtn = () => {
      if ((this.bunniesIndex + 1) !== this.bunnies.length) {
        this.bunniesIndex += 1;
      } else {
        this.bunniesIndex = 0;
      }

      this.bunny = this.bunnies[this.bunniesIndex];
    };
  }
};
