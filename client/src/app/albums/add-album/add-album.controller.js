addAlbumController.$inject = ['albumsService'];

export default function addAlbumController(albumsService) {
  this.style = style;

  this.addAlbum = ($event) => {
    albumsService
      .createAlbum({
        title: this.albumTitle
      })
      .then(album => {
        this.albums.push(album);

        $event.target.reset();
      });
  };
};
