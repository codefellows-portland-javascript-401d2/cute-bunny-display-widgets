albumListController.$inject = ['albumsService'];

export default function albumListController(albumsService) {
  this.style = style;

  this.deleteAlbum = albumId => {
    albumsService
      .deleteAlbum(albumId)
      .then(data => {
        this.albums = this.albums
          .filter(currentAlbum => currentAlbum._id !== data.album._id);
      });
  };
};
