import template from './new-post.html';
import style from './new-post.scss';

export default {
  template,
  controllerAs: 'newPost',
  bindings: {
    add: '&',

  },
  controller: function() {
    this.style = style;

    this.submit = () => {
      if (this.postData && this.postData.url) {
        this.add({posted: this.postData});
        this.postData = {};
      }
    };
  }
}; 