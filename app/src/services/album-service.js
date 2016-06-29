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
    }
  };
};