editAlbumController.$inject = ['albumsService'];

export default function editAlbumController(albumsService) {
  this.albumTitle = this.album.title;

  this.updateAlbum = () => {
    albumsService
      .updateAlbum(this.album._id, {
        title: this.albumTitle
      })
      .then(() => {
        this.album.title = this.albumTitle;
        this.album.updateAlbum = false;
      });
  };
};
