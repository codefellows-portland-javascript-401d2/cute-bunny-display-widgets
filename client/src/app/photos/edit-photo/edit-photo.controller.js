editPhotoController.$inject = ['photosService'];

export default function editPhotoController(photosService) {
  this.photoTitle = this.photo.title;
  this.photoDescription = this.photo.description;
  this.photoLink = this.photo.photoLink;
  this.photoThumbWidth = this.photo.photoThumbWidth;
  this.photoThumbHeight = this.photo.photoThumbHeight;
  this.photoFullWidth = this.photo.photoFullWidth;
  this.photoFullHeight = this.photo.photoFullHeight;

  this.updatePhoto = () => {
    photosService
      .updatePhoto(this.photo._id, {
        title: this.photoTitle,
        description: this.photoDescription,
        photoLink: this.photoLink,
        photoThumbWidth: this.photoThumbWidth,
        photoThumbHeight: this.photoThumbHeight,
        photoFullWidth: this.photoFullWidth,
        photoFullHeight: this.photoFullHeight
      })
      .then(() => {
        this.photo.title = this.photoTitle;
        this.photo.description = this.photoDescription;
        this.photo.photoLink = this.photoLink;
        this.photo.photoThumbWidth = this.photoThumbWidth;
        this.photo.photoThumbHeight = this.photoThumbHeight;
        this.photo.photoFullWidth = this.photoFullWidth;
        this.photo.photoFullHeight = this.photoFullHeight;
        this.photo.updatePhoto = false;
      });
  };
};
