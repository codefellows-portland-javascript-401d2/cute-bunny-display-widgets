import template from './add-pic.html';
import styles from './add-pic.scss';

export default {
  template,
  bindings: {
    add: '&'
  },
  controller: function(){
    this.styles = styles;
    this.item = {};
    this.submit = function(){
      const item = this.item;
      this.add({newpic: item});
      this.item = {};
    };
  }
};
