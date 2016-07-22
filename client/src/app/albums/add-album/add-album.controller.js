addAlbumController.$inject = ['albumsService'];

export default function addAlbumController(albumsService) {
  this.addAlbum = ($event) => {
    albumsService
      .createAlbum({
        title: this.albumTitle
      })
      .then(album => {
        album.updateAlbum = false;

        this.albums.push(album);

        $event.target.reset();
      });
  };
};
