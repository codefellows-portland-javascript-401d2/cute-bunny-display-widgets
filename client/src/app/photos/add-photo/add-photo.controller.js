addPhotoController.$inject = ['photosService'];

export default function addPhotoController(photosService) {
  this.newPhoto = {
    albums: [this.album._id]
  };

  this.addPhoto = $event => {
    photosService
      .createPhoto(this.newPhoto)
      .then(photo => {
        photo.updatePhoto = false;

        let photosLength = this.photos.length;
        let photosGroupLast = photosLength - 1;
        let photosGroupLength = photosGroupLast >= 0 ? this.photos[photosGroupLast].length : 0;

        if (photosLength > 0 && photosGroupLength < 3) {
          this.photos[photosGroupLast].push(photo);
        } else {
          this.photos.push([photo]);
        }

        $event.target.reset();
      });
  };
};
