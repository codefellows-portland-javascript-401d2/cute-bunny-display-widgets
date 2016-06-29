import template from './new-post.html';
import style from './new-post.scss';

export default {
  template,
  controllerAs: 'newPost',
  bindings: {
    add: '&'
  },
  controller
}; 

controller.$inject = ['albumService'];

function controller(albumService) {
  this.style = style;

  this.submit = () => {
    if (this.postData && this.postData.url && this.postData.title) {
      this.add({posted: this.postData});
      this.postData = {};
    }
  };

  albumService
    .get()
    .then(albums => {
      this.albums = albums;
      console.log(albums);
    })
    .catch(err => console.log('error:', err));

}