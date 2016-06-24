import template from './new-post.html';
import style from './new-post.scss';

export default {
  template,
  controllerAs: 'newPost',
  bindings: {
    data: '='
  },
  controller: function() {
    this.style = style;

    this.addPost = (post) => {
      console.log(post);
      if (post && post.url) {
        this.data.unshift(post);
        this.postData = {};
      }
    };
  }
}; 