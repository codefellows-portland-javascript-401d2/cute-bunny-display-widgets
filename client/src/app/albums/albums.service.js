albumsService.$inject = ['$http', 'apiUrl'];

export default function albumsService($http, apiUrl) {
  return {
    createAlbum(album) {
      return $http
        .post(`${apiUrl}/albums`, album)
        .then(result => result.data);
    },
    deleteAlbum(albumId) {
      return $http
        .delete(`${apiUrl}/albums/${albumId}`)
        .then(result => result.data);
    },
    readAlbum(albumId) {
      return $http
        .get(`${apiUrl}/albums/${albumId}`)
        .then(result => result.data);
    },
    readAlbums() {
      return $http
        .get(`${apiUrl}/albums`)
        .then(result => result.data);
    },
    updateAlbum(albumId, album) {
      return $http
        .put(`${apiUrl}/albums/${albumId}`, album)
        .then(result => result.data);
    }
  }
};
