import template from './toggler.html';
import style from './toggler.scss';

export default {
  template,
  controllerAs: 'toggler',
  bindings: {
    viewOption: '<',
    images: '<',
    albumSelect: '<'
  },
  controller
};

controller.$inject = ['albumService', 'imageService', '$state'];

function controller(albumService, imageService, $state) {
  this.style = style;

  this.uiOnParamsChanged = params => {
    this.viewOption = params.view || this.viewOption;
  };

  albumService
    .get()
    .then(list => {
      this.albums = list;
    })
    .catch(err => console.log('error:', err));

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

  this.change = () => {
    $state.go($state.current.name, {
      view: this.viewOption,
      album: this.albumSelect
    });

  };

}