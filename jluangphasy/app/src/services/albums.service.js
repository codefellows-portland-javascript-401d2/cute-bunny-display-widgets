albumsService.$inject = ['$http', 'apiUrl'];

export default function albumsService($http, apiUrl) {
  return {
    getAlbums() {
      return $http
        .get(`${apiUrl}/albums`)
        .then(result => result.data);
    },
    addAlbum(album) {
      return $http
        .post(`${apiUrl}/albums`, album)
        .then(result => result.data);
    },
    getAlbum(albumId) {
      return $http
        .get(`${apiUrl}/albums/${albumId}`)
        .then(result => result.data);
    },
    getImages(albumId) {
      return $http
        .get(`${apiUrl}/albums/${albumId}/images`)
        .then(result => result.data);
    },
    addImage(albumId, image) {
      return $http
        .post(`${apiUrl}/albums/${albumId}/images`, image)
        .then(result => result.data);
    },
    getImage(albumId, imageId) {
      return $http
        .get(`${apiUrl}/albums/${albumId}/images/${imageId}`)
        .then(result => result.data);
    },
  }
};
