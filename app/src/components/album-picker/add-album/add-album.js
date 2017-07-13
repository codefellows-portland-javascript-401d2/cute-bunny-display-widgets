import template from './add-album.html';
import styles from './add-album.scss';

export default {
  template,
  bindings:{
    animal: '=',
    add: '&'
  },
  controller: function(){
    this.styles = styles;
    this.item = {};
    this.submit = () => {
      if (!this.item.name) return;
      const item = this.item;
      this.add({newanimal: item});
      this.item = {};
    };
  }
};
