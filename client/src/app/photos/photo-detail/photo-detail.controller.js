import style from './photo-detail.style.scss';

photoDetailController.$inject = ['$state', 'photosService'];

export default function photoDetailController($state, photosService) {
  this.style = style;

  this.deletePhoto = photoId => {
    photosService
      .deletePhoto(photoId)
      .then(photo => {
        $state.go('album-detail', {
          albumId: photo.albums[0]
        });
      });
  };
};
