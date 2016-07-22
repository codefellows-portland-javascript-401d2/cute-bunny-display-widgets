albumListController.$inject = ['albumsService'];

export default function albumListController(albumsService) {
  this.albums = this.albums.map(album => {
    album.updateAlbum = false;

    return album;
  });

  this.deleteAlbum = albumId => {
    albumsService
      .deleteAlbum(albumId)
      .then(data => {
        this.albums = this.albums
          .filter(currentAlbum => currentAlbum._id !== data.album._id);
      });
  };
};
