import template from './toggler.html';
import style from './toggler.scss';

export default {
  template,
  controllerAs: 'toggler',

  // bindings: {
  //   images: '='
  // },
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
    console.log('changed called');
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

}