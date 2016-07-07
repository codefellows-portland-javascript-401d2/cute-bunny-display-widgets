import style from './album-detail.style.scss';

albumDetailController.$inject = ['photosService'];

export default function albumDetailController(photosService) {
  this.style = style;

  this.data.photos = this.data.photos.map(photo => {
    photo.updatePhoto = false;

    return photo;
  });

  this.data.photos = [].concat.apply(
    [],
    this.data.photos.map((elem, i) => {
      return i % 3 ? [] : [this.data.photos.slice(i, i + 3)];
    })
  );

  this.deletePhoto = photoId => {
    photosService
      .deletePhoto(photoId)
      .then(photo => {
        this.data.photos = this.data.photos
          .map(currentPhotos => currentPhotos
            .filter(currentPhoto => currentPhoto._id !== photo._id)
          );
      });
  };
};
