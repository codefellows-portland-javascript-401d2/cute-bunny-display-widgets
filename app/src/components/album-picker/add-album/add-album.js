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
    this.submit = function(){
      const item = this.item;
      this.add({newalbum: item});
      this.item = {};
    };
  }

};
