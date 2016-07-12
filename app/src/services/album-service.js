albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/albums`)
        .then(list => list.data.content);
    },
    post(newAlbum) {
      return $http.post(`${apiUrl}/albums`, newAlbum)
        .then(result => result.data.content);
    },
    del(albumId) {
      return $http.delete(`${apiUrl}/albums/${albumId}`)
        .then(result => result.data.content);
    }
  };
};