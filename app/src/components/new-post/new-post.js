import template from './new-post.html';
import style from './new-post.scss';

export default {
  template,
  controllerAs: 'newPost',
  controller
}; 

controller.$inject = ['albumService', 'imageService'];

function controller(albumService, imageService) {
  this.style = style;

  this.submit = () => {
    if (this.postData && this.postData.url && this.postData.title) {
      this.addImage(this.postData);
      this.postData = {};
    }
  };

  this.addImage = (image) => {
    imageService
      .post(image)
      .then((result) => {
        console.log(`${result} saved!`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  albumService
    .get()
    .then(albums => {
      this.albums = albums;
    })
    .catch(err => console.log('error:', err));

}