albumsService.$inject = ['$http', 'apiUrl'];

export default function albumsService($http, apiUrl) {
  return {
    createAlbum(album) {
      return $http
        .post(`${apiUrl}/albums`, album)
        .then(res => res.data.result);
    },
    deleteAlbum(albumId) {
      return $http
        .delete(`${apiUrl}/albums/${albumId}`)
        .then(res => res.data.result);
    },
    retrieveAlbum(albumId) {
      return $http
        .get(`${apiUrl}/albums/${albumId}`)
        .then(res => res.data.result);
    },
    retrieveAlbums() {
      return $http
        .get(`${apiUrl}/albums`)
        .then(res => res.data.result);
    },
    updateAlbum(albumId, album) {
      return $http
        .put(`${apiUrl}/albums/${albumId}`, album)
        .then(res => res.data.result);
    }
  }
};
