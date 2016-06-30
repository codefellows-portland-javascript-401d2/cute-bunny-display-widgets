import template from './toggler.html';
import style from './toggler.scss';

export default {
  template,
  controllerAs: 'toggler',
  controller
};

controller.$inject = ['albumService', 'imageService'];

function controller(albumService, imageService) {
  this.toggle = 'thumb';
  this.style = style;
  this.albumSelect = 'all';

  albumService
    .get()
    .then(list => {
      this.albums = list;
    })
    .catch(err => console.log('error:', err));

  this.getImages = function() {
    if (this.albumSelect == 'all' || this.albumSelect == null) {
      imageService
        .get()
        .then(images => this.images = images)
        .catch(err => console.log('Error:', err));
    } else {
      imageService
        .getByAlbum(this.albumSelect)
        .then(images => this.images = images)
        .catch(err => console.log('error:', err)); 
    }
  };

  this.removeImage = (imageId) => {
    imageService
      .del(imageId)
      .then(() => {
        const index = this.images.findIndex(item => item._id == imageId);
        this.images.splice(index, 1);
      });
  };

  this.addImage = (image) => {
    imageService
      .post(image)
      .then(image => {
        if (this.albumSelect === image.album || this.albumSelect === null || this.albumSelect === 'all') {
          this.images.unshift(image);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

}