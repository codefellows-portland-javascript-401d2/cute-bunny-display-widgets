import template from './full.html';
import styles from './full.scss';

export default {
  template,
  controllerAs: 'full',
  bindings: {
    pic: '='
  },
  controller: function(){
    this.styles = styles;
  }
};
