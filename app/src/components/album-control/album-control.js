import template from './album-control.html';
import style from './album-control.scss';

export default {
  template,
  controllerAs: 'albumControl',
  controller
};

controller.$inject = ['albumService'];

function controller(albumService) {
  this.style = style;

  albumService
    .get()
    .then(albums => {
      this.albums = albums;
    })
    .catch(err => console.log('error', err));

  this.removeAlbum = function(albumId) {
    albumService
      .del(albumId)
      .then(() => {
        const index = this.albums.findIndex(item => item._id == albumId);
        this.albums.splice(index, 1);
      })
      .catch(err => console.log('error', err));
  };
}