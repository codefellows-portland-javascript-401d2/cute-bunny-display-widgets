import template from './header.html';
import styles from './header.scss';

export default {
  template,
  bindings: {
    display: '<',
    animal: '<',
    animalname: '<'
  },
  controller: function(){
    this.styles = styles;
  }
};
