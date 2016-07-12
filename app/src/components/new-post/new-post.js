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

  this.newAlbumMode = false;

  this.submit = () => {
    if (this.postData.url && this.postData.title) {
      if (!this.postData.newAlbum) {
        this.addImage(this.postData);
        this.postData = {};
      }
      else {
        const postBody = JSON.stringify({title: this.postData.newAlbum});
        albumService
          .post(postBody)
          .then(album => {
            this.postData.album = album._id;
            this.addImage(this.postData);
            this.postData = {};
          })
          .catch(err => {
            console.log('error', err);
          });
      }
    }
  };

  this.addImage = (image) => {
    imageService
      .post(image)
      .then((result) => {
        // Print message here or reroute etc.
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